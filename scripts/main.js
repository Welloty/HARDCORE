Events.on(WorldLoadEvent, event => {
    Timer.schedule(() => {
        if (Vars.state.isCampaign()) {
            Vars.state.rules.unitHealthMultiplier = 3.0;
            Vars.state.rules.unitDamageMultiplier = 3.0;

            Log.info("[Mod] Правила успешно применены.");
            Vars.ui.hudfrag.showToast("Сложность принудительно изменена.");
        }
    }, 0.2);
});