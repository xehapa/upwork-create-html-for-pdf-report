import os
from PyPDF2 import PdfMerger

basepath = os.getcwd()
stream = os.popen(
    f"cd {basepath}/playwright && npm install && node {basepath}/playwright/index.js")
print(stream.read())

files = os.listdir(f"{basepath}/output")
m = PdfMerger()

for i in range(1, 7):
    m.append(f"{basepath}/output/page-{i}.pdf")

print('Combining multiple pdf into one')
m.write(f"{basepath}/output/combined.pdf")
print(f"Your pdf is ready in {basepath}/output/combined.pdf")
m.close()
