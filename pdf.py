import os
from PyPDF2 import PdfMerger

basepath = os.getcwd()
playwright_path = f"{basepath}/playwright"

if (os.path.isdir(f"{basepath}/output") == False):
    print('Output dir is not exist. Creating one...')
    os.makedirs(f"{basepath}/output")

print('Checking if playwright is installed')

if not (os.path.exists(f"{playwright_path}/node_modules") and os.path.isdir(f"{playwright_path}/node_modules")):
    print('Playwirght is not installed. Installing playwright. Please wait...')
    print(os.popen(f"cd {playwright_path} && npm install").read())
    print('Playwright has been installed. Preparing to generate pdf in second')

print('All ok to generate PDF...')
print(os.popen(f"BASE_PATH={basepath} node {playwright_path}/index.js").read())

files = os.listdir(f"{basepath}/output")

if (len(files) >= 6):
    m = PdfMerger()
    for i in range(1, 7):
        m.append(f"{basepath}/output/page-{i}.pdf")
    print('Started to combining PDF files')
    m.write(f"{basepath}/output/combined.pdf")
    m.close()
    print(f"Your combined PDF is ready in {basepath}/output/combined.pdf")
