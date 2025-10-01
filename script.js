// Data Storage
let users = JSON.parse(localStorage.getItem('hospitalUsers')) || [
    { id: 1, name: 'Dr. JoÃ£o Silva', email: 'joao@hospital.com', password: '123456', type: 'doctor', crm: '123456', specialty: 'Cardiologia' },
    { id: 2, name: 'Maria Santos', email: 'maria@email.com', password: '123456', type: 'patient', cpf: '123.456.789-00', phone: '(11) 99999-9999' },
    { id: 3, name: 'Admin Sistema', email: 'admin@hospital.com', password: 'admin123', type: 'admin' }
];

let appointments = JSON.parse(localStorage.getItem('hospitalAppointments')) || [
    { id: 1, patientId: 2, doctorId: 1, date: '2024-10-05', time: '14:00', specialty: 'Cardiologia', status: 'confirmed' },
    { id: 2, patientId: 2, doctorId: 1, date: '2024-10-10', time: '10:00', specialty: 'Cardiologia', status: 'pending' }
];

let medicalRecords = JSON.parse(localStorage.getItem('hospitalRecords')) || [
    { id: 1, patientId: 2, doctorId: 1, date: '2024-09-15', diagnosis: 'HipertensÃ£o arterial', treatment: 'MedicaÃ§Ã£o prescrita', notes: 'Retorno em 30 dias' }
];

let currentUser = null;

// Utility Functions
function saveData() {
    localStorage.setItem('hospitalUsers', JSON.stringify(users));
    localStorage.setItem('hospitalAppointments', JSON.stringify(appointments));
    localStorage.setItem('hospitalRecords', JSON.stringify(medicalRecords));
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 
otification notification-+type;
    notification.textContent = message;
    notification.style.cssText = 'position: fixed; top: 20px; right: 20px; padding: 1rem 2rem; background: ' + (type === 'success' ? '#4caf50' : '#f44336') + '; color: white; border-radius: 8px; z-index: 9999; animation: slideIn 0.3s;';
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Modal Functions
function showLoginModal() {
    closeModal('registerModal');
    document.getElementById('loginModal').style.display = 'block';
}

function showRegisterModal() {
    closeModal('loginModal');
    document.getElementById('registerModal').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function closeDashboard() {
    document.getElementById('dashboardModal').style.display = 'none';
}

// Scroll Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Login Function
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const userType = document.getElementById('userType').value;
    
    const user = users.find(u => u.email === email && u.password === password && u.type === userType);
    
    if (user) {
        currentUser = user;
        closeModal('loginModal');
        showNotification('Login realizado com sucesso!');
        showDashboard();
    } else {
        showNotification('Email, senha ou tipo de usuÃ¡rio incorretos!', 'error');
    }
});

// Register Function
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const cpf = document.getElementById('registerCpf').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    const userType = document.getElementById('registerUserType').value;
    
    if (password !== confirmPassword) {
        showNotification('As senhas nÃ£o coincidem!', 'error');
        return;
    }
    
    if (users.find(u => u.email === email)) {
        showNotification('Este email jÃ¡ estÃ¡ cadastrado!', 'error');
        return;
    }
    
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
        phone: phone,
        cpf: cpf,
        password: password,
        type: userType
    };
    
    users.push(newUser);
    saveData();
    
    closeModal('registerModal');
    showNotification('Cadastro realizado com sucesso! FaÃ§a login para continuar.');
});

// Dashboard Function
function showDashboard() {
    const modal = document.getElementById('dashboardModal');
    const title = document.getElementById('dashboardTitle');
    const body = document.getElementById('dashboardBody');
    
    if (currentUser.type === 'patient') {
        title.textContent = 'Dashboard do Paciente - ' + currentUser.name;
        body.innerHTML = getPatientDashboard();
    } else if (currentUser.type === 'doctor') {
        title.textContent = 'Dashboard do MÃ©dico - ' + currentUser.name;
        body.innerHTML = getDoctorDashboard();
    } else if (currentUser.type === 'admin') {
        title.textContent = 'Dashboard Administrativo';
        body.innerHTML = getAdminDashboard();
    }
    
    modal.style.display = 'block';
    attachDashboardEvents();
}

// Patient Dashboard
function getPatientDashboard() {
    const userAppointments = appointments.filter(a => a.patientId === currentUser.id);
    const userRecords = medicalRecords.filter(r => r.patientId === currentUser.id);
    
    return 
        <div class='dashboard-grid'>
            <div class='dashboard-card' onclick='showNewAppointmentForm()'>
                <i class='fas fa-calendar-plus'></i>
                <h3>Nova Consulta</h3>
                <p>Agendar nova consulta</p>
            </div>
            <div class='dashboard-card'>
                <i class='fas fa-calendar-check'></i>
                <h3>+userAppointments.length+</h3>
                <p>Consultas Agendadas</p>
            </div>
            <div class='dashboard-card'>
                <i class='fas fa-file-medical'></i>
                <h3>+userRecords.length+</h3>
                <p>ProntuÃ¡rios</p>
            </div>
            <div class='dashboard-card'>
                <i class='fas fa-user'></i>
                <h3>Perfil</h3>
                <p>Meus dados pessoais</p>
            </div>
        </div>
        
        <div class='dashboard-table'>
            <h3>Minhas Consultas</h3>
            <div class='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>HorÃ¡rio</th>
                            <th>MÃ©dico</th>
                            <th>Especialidade</th>
                            <th>Status</th>
                            <th>AÃ§Ãµes</th>
                        </tr>
                    </thead>
                    <tbody>
                        +userAppointments.map(a => {
                            const doctor = users.find(u => u.id === a.doctorId);
                            return 
                                <tr>
                                    <td>+formatDate(a.date)+</td>
                                    <td>+a.time+</td>
                                    <td>+(doctor ? doctor.name : 'N/A')+</td>
                                    <td>+a.specialty+</td>
                                    <td><span class='badge badge-+getStatusBadge(a.status)+'>+getStatusText(a.status)+</span></td>
                                    <td><button class='btn btn-sm' onclick='cancelAppointment(+a.id+)'>Cancelar</button></td>
                                </tr>
                            ;
                        }).join('')+
                    </tbody>
                </table>
            </div>
        </div>
        
        <div id='appointmentFormContainer'></div>
    ;
}

// Doctor Dashboard
function getDoctorDashboard() {
    const doctorAppointments = appointments.filter(a => a.doctorId === currentUser.id);
    const todayAppointments = doctorAppointments.filter(a => a.date === new Date().toISOString().split('T')[0]);
    
    return 
        <div class='dashboard-grid'>
            <div class='dashboard-card'>
                <i class='fas fa-calendar-day'></i>
                <h3>+todayAppointments.length+</h3>
                <p>Consultas Hoje</p>
            </div>
            <div class='dashboard-card'>
                <i class='fas fa-calendar-week'></i>
                <h3>+doctorAppointments.length+</h3>
                <p>Total de Consultas</p>
            </div>
            <div class='dashboard-card' onclick='showNewRecordForm()'>
                <i class='fas fa-file-medical-alt'></i>
                <h3>Novo ProntuÃ¡rio</h3>
                <p>Registrar atendimento</p>
            </div>
            <div class='dashboard-card'>
                <i class='fas fa-users'></i>
                <h3>+medicalRecords.filter(r => r.doctorId === currentUser.id).length+</h3>
                <p>Pacientes Atendidos</p>
            </div>
        </div>
        
        <div class='dashboard-table'>
            <h3>Agenda de Consultas</h3>
            <div class='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>HorÃ¡rio</th>
                            <th>Paciente</th>
                            <th>Especialidade</th>
                            <th>Status</th>
                            <th>AÃ§Ãµes</th>
                        </tr>
                    </thead>
                    <tbody>
                        +doctorAppointments.map(a => {
                            const patient = users.find(u => u.id === a.patientId);
                            return 
                                <tr>
                                    <td>+formatDate(a.date)+</td>
                                    <td>+a.time+</td>
                                    <td>+(patient ? patient.name : 'N/A')+</td>
                                    <td>+a.specialty+</td>
                                    <td><span class='badge badge-+getStatusBadge(a.status)+'>+getStatusText(a.status)+</span></td>
                                    <td><button class='btn btn-sm btn-primary' onclick='confirmAppointment(+a.id+)'>Confirmar</button></td>
                                </tr>
                            ;
                        }).join('')+
                    </tbody>
                </table>
            </div>
        </div>
        
        <div id='recordFormContainer'></div>
    ;
}

// Admin Dashboard
function getAdminDashboard() {
    const totalPatients = users.filter(u => u.type === 'patient').length;
    const totalDoctors = users.filter(u => u.type === 'doctor').length;
    const totalAppointments = appointments.length;
    
    return 
        <div class='dashboard-grid'>
            <div class='dashboard-card'>
                <i class='fas fa-users'></i>
                <h3>+totalPatients+</h3>
                <p>Total de Pacientes</p>
            </div>
            <div class='dashboard-card'>
                <i class='fas fa-user-md'></i>
                <h3>+totalDoctors+</h3>
                <p>Total de MÃ©dicos</p>
            </div>
            <div class='dashboard-card'>
                <i class='fas fa-calendar-check'></i>
                <h3>+totalAppointments+</h3>
                <p>Total de Consultas</p>
            </div>
            <div class='dashboard-card'>
                <i class='fas fa-file-medical'></i>
                <h3>+medicalRecords.length+</h3>
                <p>ProntuÃ¡rios</p>
            </div>
        </div>
        
        <div class='dashboard-table'>
            <h3>Todas as Consultas</h3>
            <div class='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>HorÃ¡rio</th>
                            <th>Paciente</th>
                            <th>MÃ©dico</th>
                            <th>Especialidade</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        +appointments.map(a => {
                            const patient = users.find(u => u.id === a.patientId);
                            const doctor = users.find(u => u.id === a.doctorId);
                            return 
                                <tr>
                                    <td>+formatDate(a.date)+</td>
                                    <td>+a.time+</td>
                                    <td>+(patient ? patient.name : 'N/A')+</td>
                                    <td>+(doctor ? doctor.name : 'N/A')+</td>
                                    <td>+a.specialty+</td>
                                    <td><span class='badge badge-+getStatusBadge(a.status)+'>+getStatusText(a.status)+</span></td>
                                </tr>
                            ;
                        }).join('')+
                    </tbody>
                </table>
            </div>
        </div>
    ;
}

// Helper Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
}

function getStatusBadge(status) {
    const badges = {
        'pending': 'warning',
        'confirmed': 'success',
        'cancelled': 'danger',
        'completed': 'info'
    };
    return badges[status] || 'info';
}

function getStatusText(status) {
    const texts = {
        'pending': 'Pendente',
        'confirmed': 'Confirmada',
        'cancelled': 'Cancelada',
        'completed': 'ConcluÃ­da'
    };
    return texts[status] || status;
}

// Appointment Functions
function showNewAppointmentForm() {
    const doctors = users.filter(u => u.type === 'doctor');
    const container = document.getElementById('appointmentFormContainer');
    
    container.innerHTML = 
        <div class='dashboard-table' style='margin-top: 2rem;'>
            <h3>Agendar Nova Consulta</h3>
            <form id='newAppointmentForm' style='padding: 2rem;'>
                <div class='form-group'>
                    <label>MÃ©dico</label>
                    <select id='appointmentDoctor' required>
                        <option value=''>Selecione o mÃ©dico...</option>
                        +doctors.map(d => '<option value="'+d.id+'">'+d.name+' - '+d.specialty+'</option>').join('')+
                    </select>
                </div>
                <div class='form-group'>
                    <label>Data</label>
                    <input type='date' id='appointmentDate' required>
                </div>
                <div class='form-group'>
                    <label>HorÃ¡rio</label>
                    <select id='appointmentTime' required>
                        <option value='08:00'>08:00</option>
                        <option value='09:00'>09:00</option>
                        <option value='10:00'>10:00</option>
                        <option value='11:00'>11:00</option>
                        <option value='14:00'>14:00</option>
                        <option value='15:00'>15:00</option>
                        <option value='16:00'>16:00</option>
                        <option value='17:00'>17:00</option>
                    </select>
                </div>
                <button type='submit' class='btn btn-primary'>Agendar Consulta</button>
            </form>
        </div>
    ;
    
    document.getElementById('newAppointmentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const doctorId = parseInt(document.getElementById('appointmentDoctor').value);
        const doctor = users.find(u => u.id === doctorId);
        const date = document.getElementById('appointmentDate').value;
        const time = document.getElementById('appointmentTime').value;
        
        const newAppointment = {
            id: appointments.length + 1,
            patientId: currentUser.id,
            doctorId: doctorId,
            date: date,
            time: time,
            specialty: doctor.specialty || 'Geral',
            status: 'pending'
        };
        
        appointments.push(newAppointment);
        saveData();
        showNotification('Consulta agendada com sucesso!');
        showDashboard();
    });
}

function cancelAppointment(appointmentId) {
    if (confirm('Deseja realmente cancelar esta consulta?')) {
        const appointment = appointments.find(a => a.id === appointmentId);
        if (appointment) {
            appointment.status = 'cancelled';
            saveData();
            showNotification('Consulta cancelada com sucesso!');
            showDashboard();
        }
    }
}

function confirmAppointment(appointmentId) {
    const appointment = appointments.find(a => a.id === appointmentId);
    if (appointment) {
        appointment.status = 'confirmed';
        saveData();
        showNotification('Consulta confirmada!');
        showDashboard();
    }
}

// Record Functions
function showNewRecordForm() {
    const patients = users.filter(u => u.type === 'patient');
    const container = document.getElementById('recordFormContainer');
    
    container.innerHTML = 
        <div class='dashboard-table' style='margin-top: 2rem;'>
            <h3>Novo ProntuÃ¡rio MÃ©dico</h3>
            <form id='newRecordForm' style='padding: 2rem;'>
                <div class='form-group'>
                    <label>Paciente</label>
                    <select id='recordPatient' required>
                        <option value=''>Selecione o paciente...</option>
                        +patients.map(p => '<option value="'+p.id+'">'+p.name+'</option>').join('')+
                    </select>
                </div>
                <div class='form-group'>
                    <label>DiagnÃ³stico</label>
                    <input type='text' id='recordDiagnosis' required>
                </div>
                <div class='form-group'>
                    <label>Tratamento</label>
                    <textarea id='recordTreatment' rows='3' required></textarea>
                </div>
                <div class='form-group'>
                    <label>ObservaÃ§Ãµes</label>
                    <textarea id='recordNotes' rows='3'></textarea>
                </div>
                <button type='submit' class='btn btn-primary'>Salvar ProntuÃ¡rio</button>
            </form>
        </div>
    ;
    
    document.getElementById('newRecordForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const patientId = parseInt(document.getElementById('recordPatient').value);
        const diagnosis = document.getElementById('recordDiagnosis').value;
        const treatment = document.getElementById('recordTreatment').value;
        const notes = document.getElementById('recordNotes').value;
        
        const newRecord = {
            id: medicalRecords.length + 1,
            patientId: patientId,
            doctorId: currentUser.id,
            date: new Date().toISOString().split('T')[0],
            diagnosis: diagnosis,
            treatment: treatment,
            notes: notes
        };
        
        medicalRecords.push(newRecord);
        saveData();
        showNotification('ProntuÃ¡rio salvo com sucesso!');
        showDashboard();
    });
}

// Attach Dashboard Events
function attachDashboardEvents() {
    // Events are attached inline in the HTML
}

// Logout Function
function logout() {
    currentUser = null;
    closeDashboard();
    showNotification('Logout realizado com sucesso!');
}

// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});

// Close modals when clicking outside
window.onclick = function(event) {
    const modals = ['loginModal', 'registerModal', 'dashboardModal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target === modal) {
            closeModal(modalId);
        }
    });
}

// Smooth scroll for navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
        
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});
