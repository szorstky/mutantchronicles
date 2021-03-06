export const preloadHandlebarsTemplates = async function() {
    const template_paths = [
        "systems/mutantchronicles/templates/actors/partials/player-attributes-and-skills-partial.hbs",
        "systems/mutantchronicles/templates/actors/partials/player-attributes.hbs",
        "systems/mutantchronicles/templates/actors/partials/mc-actor-stats-block.hbs"
    ];

    return loadTemplates(template_paths);
};