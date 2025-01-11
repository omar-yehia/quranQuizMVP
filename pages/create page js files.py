import mysql.connector
import json

# Database connection setup
db_config = {
	'host': 'localhost',     # Replace with your database host
	'user': 'root',          # Replace with your database user
	'password': '',          # Replace with your database password
	'database': 'quranapp'   # Replace with your database name
}

def createJsFile(page):
	# Step 1: Query the sura_id of the given page
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

		# Step 3: Fetch ayas_old_madina data for the given page
		query = "SELECT id, positions, aya_moshaf FROM ayas_old_madina WHERE page = %s"
		cursor.execute(query, (page,))
		results = cursor.fetchall()

		# Prepare the ayas data with coordinates and aya_moshaf
		ayas_data = []
		for row in results:
			coordinates = json.loads(row[1])  # Convert the string representation to an actual array
			ayas_data.append({
				'aya_id': row[0], 
				'coordinates': coordinates,
				'aya_moshaf': row[2]  # Add the aya_moshaf to the JSON object
			})

		# Prepare nearbySurasNames from suras results
		nearby_suras_names = {sura[0]: sura[1] for sura in suras}

		# Set mainSuraId
		main_sura_id = sura_id

		# Step 4: Get nearby pages for the first aya
		nearby_pages = [page - 2, page - 1, page + 1, page + 2]  # Pages 2 before and 2 after
		nearby_ayas = {}

		for nearby_page in nearby_pages:
			if nearby_page > 0:  # Ensure page is valid
				aya_query = """
					SELECT id, aya_plain
					FROM ayas
					WHERE page = %s
					ORDER BY id ASC
					LIMIT 1
				"""
				cursor.execute(aya_query, (nearby_page,))
				aya_result = cursor.fetchone()
				if aya_result:
					aya_id, aya_plain = aya_result
					# Get the first 5 words from the aya_plain
					words = aya_plain.split(' ')
					first_5_words = ' '.join(words[:5])
					nearby_ayas[nearby_page] = first_5_words

		# Step 5: Create the JavaScript content to write to the file
		with open(f"{page}.js", "w", encoding='utf-8') as file:
			file.write(f"const mainSuraId = {main_sura_id};\n")
			file.write("const nearbySurasNames = {\n")
			for sura_id, name in nearby_suras_names.items():
				file.write(f"    {sura_id}: '{name}',\n")
			file.write("};\n")

			file.write("const choicesObjects = {\n")
			for key, value in nearby_ayas.items():
				file.write(f"    \"{key}\": \"{value}\",\n")
			file.write("};\n")

			file.write("const ayas = ")
			file.write(json.dumps(ayas_data,ensure_ascii=False))

	else:
		print(f"No sura_id found for page {page}")

try:
	# Connect to the database
	connection = mysql.connector.connect(**db_config)
	cursor = connection.cursor()
	for page in range(1,6):
		createJsFile(page)

except mysql.connector.Error as e:
	print(f"Error: {e}")
finally:
	# Close the database connection
	if connection.is_connected():
		cursor.close()
		connection.close()
