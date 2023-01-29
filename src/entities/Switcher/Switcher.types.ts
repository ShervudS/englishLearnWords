export interface ISwitcher {
    startLabel?: string,
    endLabel?: string,
    fontSizeLabel?: string,
    value: boolean,
    id?: string,
    onAction: any,
    activeIcon?: any,
    unactiveIcon?: any,
    sizeMultiplier?: number,
}

export interface ISwitcherViewStyleProps {
    readonly value: boolean;
}

export interface ISwitcherLabelStyleProps {
    readonly fontSizeLabel: string | undefined;
}
