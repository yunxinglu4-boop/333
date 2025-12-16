export interface OrnamentProps {
  position: [number, number, number];
  scale: number;
  type: 'sphere' | 'diamond' | 'drop';
}

export interface TreeLayerProps {
  scale: number;
  position: [number, number, number];
  radius: number;
  isBottom?: boolean;
}