// 🚀 DEMO CONFIG.JS - LOCAL STORAGE ONLY MODE
// (This file prevents any cloud errors and ensures everything runs locally for demo purposes)

console.log("🟢 TEXFRIEND ERP Pro - Running in Local Storage Demo Mode");

// Dummy safe wrappers so that other pages calling firebase functions won't crash
window.firebaseSave = async function(key, data) {
    // Automatically saves to localStorage as a fallback
    try {
        localStorage.setItem(key, JSON.stringify(data));
        console.log(`[Local Demo] Saved key '${key}' successfully.`);
    } catch (e) {
        console.error(`[Local Demo] Error saving key '${key}':`, e);
    }
};

window.firebaseSaveIndividual = async function(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        console.log(`[Local Demo] Saved individual key '${key}' successfully.`);
    } catch (e) {
        console.error(`[Local Demo] Error saving individual key '${key}':`, e);
    }
};

window.firebaseLoadAll = async function() {
    console.log("[Local Demo] Local storage loaded successfully.");
    return true;
};
