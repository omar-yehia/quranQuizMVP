import mysql.connector
import json

# Database connection setup
db_config = {
    'host': 'localhost',     # Replace with your database host
    'user': 'root',          # Replace with your database user
    'password': '',          # Replace with your database password
    'database': 'quranapp'   # Replace with your database name
}

try:
    # Connect to the database
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()

    # Step 1: Query the sura_id of the given page
    page = 3
    sura_id_query = "SELECT sura_id FROM ayas_old_madina WHERE page = %s LIMIT 1"
    cursor.execute(sura_id_query, (page,))
    sura_id_result = cursor.fetchone()

    if sura_id_result:
        sura_id = sura_id_result[0]

        # Step 2: Query the suras table to get id and name using whereBetween logic
        suras_query = """
            SELECT id, name 
            FROM suras
            WHERE id BETWEEN %s AND %s
        """
        suras_values = (sura_id - 1, sura_id + 2)
        cursor.execute(suras_query, suras_values)
        suras = cursor.fetchall()

        # Print the suras (optional)
        print("\nSuras:")
        for sura in suras:
            print(f"ID: {sura[0]}, Name: {sura[1]}")

    else:
        print(f"No sura_id found for page {page}")

    # Step 3: Fetch ayas_old_madina data for the given page
    query = "SELECT id, positions FROM ayas_old_madina WHERE page = %s"
    cursor.execute(query, (page,))
    results = cursor.fetchall()

    # Prepare the data for writing to a file
    data = [{'aya_id': row[0], 'coordinates': row[1]} for row in results]

    # Write the data to a JavaScript file
    with open(f"{page}.js", "w") as file:
        file.write("const ayas = ")
        file.write(json.dumps(data, indent=4))

    # Print the ayas (optional)
    for row in results:
        print(f"ID: {row[0]}, Positions: {row[1]}")

except mysql.connector.Error as e:
    print(f"Error: {e}")
finally:
    # Close the database connection
    if connection.is_connected():
        cursor.close()
        connection.close()
