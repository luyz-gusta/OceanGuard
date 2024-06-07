const listaMares = [
    {
        "id": 1,
        "nome": "Mar do Norte",
        "localizacao": "Europa",
        "ph": 8.1,
        "turbidez": 5,
        "temperatura": 15
    },
    {
        "id": 2,
        "nome": "Mar Mediterrâneo",
        "localizacao": "Europa, África, Ásia",
        "ph": 8.3,
        "turbidez": 3,
        "temperatura": 20
    },
    {
        "id": 3,
        "nome": "Mar Báltico",
        "localizacao": "Europa",
        "ph": 7.8,
        "turbidez": 7,
        "temperatura": 10
    }
]
var baseUrl = 'http://127.0.0.1:5000'
var statusValue = false

const getMares = async () => {
    Swal.showLoading();
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
    } finally {
        Swal.close()
    }
};

const getMarByID = async (id) => {
    Swal.showLoading();
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
    } finally {
        Swal.close()
    }
}

const gerarMares = async () => {
    let mares = await getMares()

    if (mares == null) {
        mares = listaMares
    }

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

    if (mar != null) {
        document.getElementById('pH').textContent = mar.ph;
        document.getElementById('turbidez').textContent = mar.turbidez;
        document.getElementById('temperatura').textContent = `${mar.temperatura}°C`;
    } else {
        const itemMar = listaMares.find(jsonMar => jsonMar.id == selectedOption.value)

        document.getElementById('pH').textContent = itemMar.ph;
        document.getElementById('turbidez').textContent = itemMar.turbidez;
        document.getElementById('temperatura').textContent = `${itemMar.temperatura}°C`;
    }
});

document.getElementById('sair').addEventListener('click', () => {
    window.location.replace('../../index.html')
})

