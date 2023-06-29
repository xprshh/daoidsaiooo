const static = imports.layouts.one.windows;
const popups = imports.layouts.one.popups;

var windows = [
    ...ags.Service.Hyprland.HyprctlGet('monitors').map(({ id }) => ([
        static.dock(id),
        static.notifications(id),
        static.desktop(id),
        static.indicator(id),
        static.bar(id),
    ])).flat(),
    popups.applauncher,
    popups.datemenu,
    popups.media,
    popups.overview,
    popups.powermenu,
    popups.verification,
    popups.quicksettings,
];
