export class CustomizerUI {
  constructor(watchModel, orbitController, audioManager) {
    this.watchModel = watchModel;
    this.orbitController = orbitController;
    this.audioManager = audioManager;

    this.initControls();
  }

  initControls() {
    // 1. Case Material Buttons
    const caseButtons = document.querySelectorAll('#case-materials .option-btn');
    caseButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        caseButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mat = btn.getAttribute('data-material');
        this.watchModel.updateCaseMaterial(mat);
        this.audioManager.playRatchetClick();
      });
    });

    // 2. Dial Accent Buttons
    const dialButtons = document.querySelectorAll('#dial-materials .option-btn');
    dialButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        dialButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const dial = btn.getAttribute('data-dial');
        this.watchModel.updateDialColor(dial);
        this.audioManager.playRatchetClick();
      });
    });

    // 3. Strap Buttons
    const strapButtons = document.querySelectorAll('#strap-materials .option-btn');
    strapButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        strapButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const strap = btn.getAttribute('data-strap');
        this.watchModel.updateStrapMaterial(strap);
        this.audioManager.playRatchetClick();
      });
    });

    // 4. Reset View Button
    const resetBtn = document.getElementById('reset-view-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.orbitController.reset();
        this.audioManager.playRatchetClick();
      });
    }

    // 5. Reserve Timepiece Button
    const reserveBtn = document.getElementById('order-inquiry-btn');
    if (reserveBtn) {
      reserveBtn.addEventListener('click', () => {
        this.audioManager.playRatchetClick();
        alert('Thank you for your interest in the FS 60P Automatic Timepiece. Your bespoke specification has been recorded.');
      });
    }
  }
}
