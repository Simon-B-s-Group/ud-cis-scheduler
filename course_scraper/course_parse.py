import requests
from bs4 import BeautifulSoup

# Open the file in read mode and read all lines
with open('courses.txt', 'r') as file:
    lines = file.readlines()

# Initialize an empty list to store unique lines
unique_lines = []

# Iterate through lines, add unique lines to the list
for line in lines:
    if line not in unique_lines:
        unique_lines.append(line)

# Sort the unique lines
unique_lines.sort()

# Open the file again in write mode and write sorted lines without duplicates
with open('sorted_courses.txt', 'w') as file:
    file.writelines(unique_lines)

with open('sorted_courses.txt', 'r') as file:
    lines = file.readlines()

    for line in lines:
        url = 'https://udapps.nss.udel.edu/CourseDescription/info?searchKey=2023%7c' + line.strip()
        response = requests.get(url)

        if response.status_code == 200:
            with open('output.txt', 'a') as writefile:
                soup = BeautifulSoup(response.content, "html.parser")
                # Find all <p> elements under the specified class .itwd > .container
                title = soup.select('.itwd-template-body .container h2')
                p_elements = soup.select('.itwd-template-body .container p')
                # Extract text content from <p> elements and store it in an array
                p_text_array = [p.text.strip() for p in p_elements]
                p_text_array2 = [p.text.strip() for p in title]
                writefile.write('{\n')
                writefile.write('\tcode: "' + line.strip() + '",\n')
                writefile.write('\tname: "' + ' '.join(title[0].text.strip().split(' ')[1:]) + '",\n')
                writefile.write('\tcredits: ' + ' '.join(p_elements[1].text.strip()[0]) + ',\n')
                cont = True
                for elem in p_elements:
                    if 'Prerequisites:' in elem.text.strip():
                        writefile.write('\tprereqs: "' + elem.text.strip()[16:].replace('\t', '').replace('\n', ' ') + '",\n')
                        cont = False
                        break
                if cont:
                    writefile.write('\tprereqs: "",\n')
                writefile.write('\tisMulticultural: false,\n')
                
                writefile.write('},\n')
                print('done', line.strip())
    else:
        print("Failed to retrieve the web page.")

    