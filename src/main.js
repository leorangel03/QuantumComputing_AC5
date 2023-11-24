function adicionarComentario() {
    const nome = document.getElementById('nameInput').value;
    const comentario = document.getElementById('commentInput').value;
  
    if (nome !== '' && comentario !== '') {
      const comentariosContainer = document.getElementById('comentariosContainer');
  
      const divComentario = document.createElement('div');
      divComentario.classList.add('comment');
      divComentario.innerHTML = `<strong>${nome}</strong>: ${comentario}`;
  
      comentariosContainer.appendChild(divComentario);

      document.getElementById('nameInput').value = '';
      document.getElementById('commentInput').value = '';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }