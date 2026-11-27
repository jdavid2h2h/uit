(function () {
  // Perfiles ficticios para probar la interfaz; no son credenciales reales.
  var profiles = [
    { name: ['JHON ALEXANDER P', 'R'], code: '20250R012', banner: 'N01960525', career: 'ARQUITECTURA', campus: 'Campus Monterrico' },
    { name: ['DIEGO ANDRES M', 'S'], code: '20250P076', banner: 'N01417525', career: 'INGENIERIA DE SOFTWARE', campus: 'Campus Monterrico' },
    { name: ['JORGE SAMUEL C', 'L'], code: '20250L044', banner: 'N05410725', career: 'DISEÑO GRAFICO', campus: 'Campus Monterrico' },
    { name: ['MATEO NICOLAS T', 'V'], code: '20250A087', banner: 'N06411825', career: 'ADMINISTRACION Y MARKETING', campus: 'Campus Monterrico' },
    { name: ['CARLOS ALBERTO G', 'D'], code: '20250T030', banner: 'N01410255', career: 'PSICOLOGIA', campus: 'Campus Monterrico' }
  ];
  var button = document.querySelector('.back-button');
  var nameLines = document.querySelectorAll('.student-name-line');
  // Incluye el perfil original del HTML sin duplicar sus datos.
  profiles.unshift({
    name: Array.from(nameLines, function (line) { return line.firstChild.nodeValue; }),
    code: document.getElementById('studentCode').textContent,
    banner: document.getElementById('studentBanner').textContent,
    career: document.getElementById('studentCareer').textContent,
    campus: document.getElementById('studentCampus').textContent
  });
  var index = Math.floor(Math.random() * profiles.length);

  function renderProfile() {
    var profile = profiles[index];
    nameLines.forEach(function (line, part) {
      line.firstChild.nodeValue = profile.name[part];
    });
    document.getElementById('studentCode').textContent = profile.code;
    document.getElementById('studentBanner').textContent = profile.banner;
    document.getElementById('studentCareer').textContent = profile.career;
    document.getElementById('studentCampus').textContent = profile.campus;
  }

  renderProfile();
  button.addEventListener('click', function () {
    index = (index + 1) % profiles.length;
    renderProfile();
  });
})();
