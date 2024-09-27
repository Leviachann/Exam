import React from 'react';
import GridIcon from '@/components/svg/GridIcon'; 
import OutlinedGridIcon from '@/components/svg/OutlinedGridIcon'; 
import CartIcon from '@/components/svg/CartIcon'; 
import OutlinedCartIcon from '@/components/svg/OutlinedCartIcon'; 

export function TabBarIcon({ focused, style, color, iconType, ...rest }: any) {
  if (iconType === 'grid') {
    return focused ? (
      <GridIcon {...rest} style={[{ marginBottom: -3 }, style]} stroke={color} />
    ) : (
      <OutlinedGridIcon {...rest} style={[{ marginBottom: -3 }, style]} stroke={color} />
    );
  }

  if (iconType === 'cart') {
    return focused ? (
      <CartIcon {...rest} style={[{ marginBottom: -3 }, style]} stroke={color} />
    ) : (
      <OutlinedCartIcon {...rest} style={[{ marginBottom: -3 }, style]} stroke={color} />
    );
  }

  return null;
}
