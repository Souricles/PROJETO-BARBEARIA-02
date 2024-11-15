document.addEventListener('DOMContentLoaded', function() {
    const availableTimes = [
        '09:00', '10:00', '11:00', '12:00', '13:00',
        '14:00', '15:00', '16:00', '17:00', '18:00','19:00','20:00','21:00'
    ];

    const timeSelect = document.getElementById('time');

    availableTimes.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        timeSelect.appendChild(option);
    });

    document.getElementById('appointmentForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        const appointment = `Agendamento para ${name} em ${date} às ${time}`;

        const listItem = document.createElement('div');
        listItem.textContent = appointment;

        const phoneNumber = '5511913040446'; // Substitua pelo seu número de telefone
        const whatsappLink = document.createElement('a');
        whatsappLink.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(appointment)}`;
        whatsappLink.target = '_blank';
        whatsappLink.textContent = 'Clique AQUI para ENVIAR seu agendamento';

        listItem.appendChild(whatsappLink);
        document.getElementById('appointmentsList').appendChild(listItem);

        // Remover o horário selecionado da lista de horários disponíveis
        const options = timeSelect.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].value === time) {
                options[i].remove();
                break;
            }
        }

        this.reset();
    });
});
