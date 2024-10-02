import { MouseSensor as LibMouseSensor } from '@dnd-kit/core';
import { MouseEvent } from 'react';

export function shouldHandleEvent(element: HTMLElement | null) {
  let cur = element;

  while (cur) {
    if (cur.dataset && cur.dataset.noDnd) {
      return false;
    }
    cur = cur.parentElement;
  }

  return true;
}

export class MouseSensor extends LibMouseSensor {
  static activators = [
    {
      eventName: 'onMouseDown' as const,
      handler: ({ nativeEvent: event }: MouseEvent) =>
        shouldHandleEvent(event.target as HTMLElement),
    },
  ];
}
