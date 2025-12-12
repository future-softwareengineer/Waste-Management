Barangay Waste Monitoring System – SDG 12 (Responsible Consumption & Production)

* Problem Being Solved

* Many barangays struggle to monitor household waste accurately.
Manual recording causes:

* Missing or inconsistent records

* Difficulty identifying top contributors

* Slow tracking and error-prone processes

* No real data to guide environmental policies

* This system provides a digital, automated, and DSA-powered solution for real-time waste monitoring.




THE SYSTEM ALLOWS:

1. Adding new waste records

2. Viewing all data in a table

3. Searching households

4. Undoing last record

5. Showing Top 5 contributors

Uses HTML, CSS, JS.

DSA CONCEPTS USED:

Array – stores records

Stack – undo last entry

Bubble Sort – get Top 5 contributors

Linear Search – search household

Dynamic DOM Update – refresh UI in real-time

INSTRUCTIONS

git clone https://github.com/future_softwareengineer/BarangayWasteManagement.git
Navigate to the project folder: cd BarangayWasteManagement
Open index.html in a web browser to run the system (no compilation needed since it’s HTML/CSS/JS).

Usage Instructions

Add a new household waste record using the form.

View all records in the table and see the Top 5 contributors highlighted.

Search for a household by name.

Undo the last added record if needed.

All changes dynamically update the table and Top 5 list.

Why These DSA Concepts Are Used

Array: Stores all household records for easy traversal and updates.

Stack: Implements undo functionality (LIFO) for instant reversal of mistakes.

Bubble Sort: Orders records by weight to identify Top 5 contributors; simple and readable.

Linear Search: Finds household records efficiently in a small dataset.

Dynamic DOM Update: Keeps table and Top 5 list updated in real-time without refreshing the page.

