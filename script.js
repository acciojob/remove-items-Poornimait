//your JS code here. If required.
function removeSelectedColor() {
            // Get the select element
            var selectElement = document.getElementById("colorSelect");

            // Get the selected index
            var selectedIndex = selectElement.selectedIndex;

            // Remove the selected option
            selectElement.remove(selectedIndex);
        }
