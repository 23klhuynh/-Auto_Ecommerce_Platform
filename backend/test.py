import requests

# Endpoint for available years
url = "https://carapi.app/api/models"


response = requests.get(url)
print(response.json())  

""" import requests


make = "Honda"
model = "Pilot"
year = 2018


url = f"https://carapi.app/api/models?make={make}&year={year}"


response = requests.get(url)


if response.status_code == 200:
    data = response.json()
    print("Honda Pilot 2018 Details:")
    for model_data in data['data']:
        print(f"Model ID: {model_data['id']}")
        print(f"Model Name: {model_data['name']}")
        print(f"Make ID: {model_data['make_id']}")
else:
    print("Error fetching data from Car API.")
 """
