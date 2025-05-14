document.addEventListener('DOMContentLoaded', function () {
    const makeDropdown = document.getElementById('make');
    const vinInput = document.getElementById('vin');
    const form = document.getElementById('searchForm');
    const errorMsg = document.getElementById('error');

    // TODO: Replace with dynamic loading from actual Excel source
    const makes = ['Toyota', 'Honda', 'Ford'];

    // Populate dropdown
    makes.forEach(make => {
        const option = document.createElement('option');
        option.value = make;
        option.textContent = make;
        makeDropdown.appendChild(option);
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const selectedMake = makeDropdown.value;
        const vin = vinInput.value.trim();

        if (vin.length !== 12) {
            errorMsg.textContent = 'Please enter exactly 12 characters of the VIN.';
            return;
        } else {
            errorMsg.textContent = '';
        }

        // TODO: Fetch data from Excel file using selectedMake and VIN
        // Redirect to detail page with relevant information
        console.log('Selected Make:', selectedMake);
        console.log('VIN:', vin);

        // Placeholder - implement routing/navigation logic
        window.location.href = 'detail.html';
    });
});
