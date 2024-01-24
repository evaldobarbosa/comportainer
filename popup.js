const getContainerName = () => {
  const x_anchr = Array.from(
    document.querySelectorAll('span a')
  ).find(el => el.textContent === 'Containers');

  if (x_anchr == undefined) {
    alert('Container não encontrado');
    return ;
  }

  return x_anchr.parentNode.parentNode.childNodes[2].innerText
}

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    func: getContainerName
  }, (result) => {

    document.getElementById("container").innerText = result[0].result;

    document.getElementById("btn").addEventListener('click', function() {
      // alert('Copiado para a área de transferência')
      navigator.clipboard.writeText(document.getElementById("text").innerText)
    })

  });
});