import pandas as pd
import requests
from PIL import Image
from io import BytesIO
import os

# Load the CSV file
csv_file = 'sheet.csv'  # Replace with your CSV file path
df = pd.read_csv(csv_file)

# Create a folder to save the images
output_folder = '../images'
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Iterate over each row in the DataFrame
for index, row in df.iterrows():
    name = row['Name'].strip()
    img_data = str(row['Upload Image'])
    if img_data.startswith("http"):
        img = f"http://drive.google.com/uc?id={img_data.split('=')[1]}"
        try:
            # Download the image from the URL
            response = requests.get(img)
            response.raise_for_status()  # Check if the request was successful

            # Open the image using PIL
            image = Image.open(BytesIO(response.content))

            # Save the image with the name from the CSV
            image_path = os.path.join(output_folder, f"{name}.jpg")  # You can change the format if needed
            image.save(image_path)
            print(f"Saved {image_path}")

        except Exception as e:
            print(f"Error processing image for {name}: {e}")

print("All images have been processed.")