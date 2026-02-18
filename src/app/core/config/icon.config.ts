import {InjectionToken} from '@angular/core';

export interface IconConfig {
  spritePublicPath: string;
  symbolPrefix: string;
}

export const ICON_CONFIG = new InjectionToken<IconConfig>('ICON_CONFIG');
