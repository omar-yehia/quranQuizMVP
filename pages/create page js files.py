import mysql.connector
import json

# Database connection setup
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'quranapp'
}

def get_sura_id(cursor, page):
    query = "SELECT sura_id FROM ayas_old_madina WHERE page = %s LIMIT 1"
    cursor.execute(query, (page,))
    result = cursor.fetchone()
    return result[0] if result else None

def get_nearby_suras(cursor, sura_id):
    query = """
        SELECT id, name 
        FROM suras
        WHERE id BETWEEN %s AND %s
    """
    cursor.execute(query, (sura_id - 1, sura_id + 2))
    return cursor.fetchall()

def get_ayas_for_page(cursor, page):
    query = "SELECT id, positions, aya_moshaf FROM ayas_old_madina WHERE page = %s"
    cursor.execute(query, (page,))
    return cursor.fetchall()

def get_nearby_pages_ayas(cursor, nearby_pages):
    nearby_ayas = {}
    for nearby_page in nearby_pages:
        if nearby_page > 0:  # Ensure page is valid
            query = """
                SELECT id, aya_plain
                FROM ayas
                WHERE page = %s
                ORDER BY id ASC
                LIMIT 1
            """
            cursor.execute(query, (nearby_page,))
            result = cursor.fetchone()
            if result:
                aya_id, aya_plain = result
                first_5_words = ' '.join(aya_plain.split(' ')[:5])
                nearby_ayas[nearby_page] = first_5_words
    return nearby_ayas

def create_js_file(cursor, page):
    # Step 1: Query the sura_id of the given page
    sura_id = get_sura_id(cursor, page)
    if sura_id is None:
        print(f"No sura_id found for page {page}")
        return

    # Step 2: Query the suras table to get id and name using whereBetween logic
    suras = get_nearby_suras(cursor, sura_id)
    nearby_suras_names = {sura[0]: sura[1] for sura in suras}

    # Step 3: Fetch ayas_old_madina data for the given page
    results = get_ayas_for_page(cursor, page)
    ayas_data = [
        {
            'aya_id': row[0],
            'coordinates': json.loads(row[1]),  # Convert the string representation to an actual array
            'aya_moshaf': row[2]
        }
        for row in results
    ]

    # Step 4: Get nearby pages for the first aya
    nearby_pages = [page - 2, page - 1, page + 1, page + 2]  # Pages 2 before and 2 after
    nearby_ayas = get_nearby_pages_ayas(cursor, nearby_pages)

    # Step 5: Create the JavaScript content to write to the file
    with open(f"{page}.js", "w", encoding='utf-8') as file:
        file.write(f"const mainSuraId = {sura_id};\n")
        file.write("const nearbySurasNames = {\n")
        for sura_id, name in nearby_suras_names.items():
            file.write(f"    {sura_id}: '{name}',\n")
        file.write("};\n")

        file.write("const choicesObjects = {\n")
        for key, value in nearby_ayas.items():
            file.write(f"    \"{key}\": \"{value}\",\n")
        file.write("};\n")

        file.write("const ayas = ")
        file.write(json.dumps(ayas_data, ensure_ascii=False))

try:
    # Connect to the database
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()
    for page in range(1, 605):
        create_js_file(cursor, page)

except mysql.connector.Error as e:
    print(f"Error: {e}")
finally:
    # Close the database connection
    if connection.is_connected():
        cursor.close()
        connection.close()
