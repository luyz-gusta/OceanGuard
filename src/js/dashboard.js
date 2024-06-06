var baseUrl = 'http://127.0.0.1:5000'
var statusValue = false

const getMares = async () => {
    try {
        const response = await fetch(`${baseUrl}/get_mares`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const getMarByID = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/get_mar/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const gerarMares = async () => {
    const mares = await getMares()

    mares.forEach(function (mar) {
        var option = document.createElement('option');
        option.value = mar.id;
        option.id = mar.id;
        option.text = mar.nome;
        option.name = mar.nome;
        document.getElementById('tipoUser').appendChild(option);
    });
}
gerarMares()

document.getElementById('tipoUser').addEventListener('change', async function () {
    var selectedOption = this.options[this.selectedIndex];
    const mar = await getMarByID(selectedOption.value)
    statusValue = true

    if (mar) {
        document.getElementById('pH').textContent = mar.ph;
        document.getElementById('turbidez').textContent = mar.turbidez;
        document.getElementById('temperatura').textContent = `${mar.temperatura}°C`;
    }
});

document.getElementById('sair').addEventListener('click', () => {
    window.location.replace('../../index.html')
})

