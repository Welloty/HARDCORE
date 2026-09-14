Events.on(WorldLoadEvent, event => {
    if (Vars.state.rules.modeName == "eradication") {
        Vars.state.rules.unitDamageMultiplier *= 3.0;
        Vars.state.rules.unitHealthMultiplier *= 5.0;
        Call.setRules(Vars.state.rules);
    }
});