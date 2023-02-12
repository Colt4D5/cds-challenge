const challengeBtns = document.querySelectorAll('button[data-challenge]');

challengeBtns.forEach(btn => btn.addEventListener('click', handleTabs));

function handleTabs(e) {
  const selectedChallenge = e.target.closest('button').dataset.challenge;
  
  const selectedBtn = document.querySelector(`button[data-challenge="${selectedChallenge}"]`);
  const prevActiveBtn = document.querySelector('main button.is_active')

  prevActiveBtn.classList.remove('is_active');
  selectedBtn.classList.add('is_active');

  const selectedTab = document.querySelector(`div[data-challenge="${selectedChallenge}"]`);
  
  if (selectedTab) {
    document.querySelectorAll('div[data-challenge].is_active').forEach(activeBtn => activeBtn.classList.remove('is_active'));
    
    selectedTab.classList.add('is_active');
  }
}