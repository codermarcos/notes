window.app = () => {

  const getPath = (path) => {
    let object = new Object();
    let xhr = new XMLHttpRequest();
    let container = document.getElementById(path);
    
    xhr.open('GET', `${path}`);

    xhr.onload = () => {
      const div = document.createElement('div');
      div.innerHTML = xhr.responseText;

      const parent = div.children[5].children[0].children;

      for (const key in parent) {
        if (!parent.hasOwnProperty(key)) return;
        const children = parent[key].children[3].children[0];

        if (children.innerHTML === '../') continue;

        const a = document.createElement('a');
        const name = children.innerHTML.replace(new RegExp('-', 'g'), ' ').replace('/', ''); 
        a.className = 'posts__link'; 
        a.href=`${path}/${children.innerHTML}`;
        a.innerHTML = name;
        container.appendChild(a);
      }
    };

    xhr.send();
  };

  getPath('javascript');  
  getPath('html');
  getPath('css');
};
window.app();
