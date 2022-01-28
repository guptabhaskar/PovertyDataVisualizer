# Imports
import requests
import json

# Defining the api-endpoint 
API_ENDPOINT = "http://localhost:9000/api/poverty"
  
# Data Formatting
f = open('poverty_example.json')
data = json.load(f)
body = []

# Iterating through the json
header = data['headers']
for curr in data['data']:
    temp = {}
    for j in range(len(header)):
        temp[header[j]] = curr[j]
    body.append(temp)

# file close
f.close()
  
# sending post request and saving response as response object
r = requests.post(url = API_ENDPOINT, json = body)
  
# extracting response text 
print(r.text)