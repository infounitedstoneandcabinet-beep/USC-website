// Sink, faucet and drain product photos supplied by the owner, named by model number.
export type Fixture = { model: string; desc: string; src: string };

const list = (prefix: string, items: [model: string, desc: string, file?: string][]): Fixture[] =>
  items.map(([model, desc, file]) => ({ model, desc, src: `/client/补资料-${prefix}-${file ?? model}.webp` }));

export const kitchenSinks = list("Kitchen-Sink", [
  ["WRD3219S", "Stainless workstation sink with accessories", "WRD3219S-all-accessories"],
  ["AP3322S-RD", "Stainless apron-front single bowl"],
  ["AP3322D-RD", "Stainless apron-front double bowl"],
  ["F3219S", "Stainless undermount single bowl"],
  ["F3219D", "Stainless undermount double bowl"],
  ["F4045", "Stainless undermount single bowl"],
  ["RD3219S", "Black stainless single bowl with grid", "RD3219S-Black-with-Grid"],
  ["RD3219D", "Black stainless double bowl with grids", "RD3219D-Black-with-Grids"],
  ["RD2318-12", "Stainless undermount single bowl"],
  ["RD2318-9", "Stainless undermount single bowl"],
  ["SFC3320S-WG", "White farmhouse single bowl, fluted front"],
  ["SFC3320D-WG", "White farmhouse double bowl"],
  ["FC3219D-WG", "White double bowl"],
  ["864", "Stainless undermount single bowl"],
  ["868", "Stainless undermount single bowl"],
  ["SM23181", "Stainless undermount single bowl"],
  ["802", "Stainless undermount double bowl"],
  ["33228", "Stainless top-mount double bowl"],
]);

export const bathroomSinks = list("Bath-Sink", [
  ["2309", "Rectangular undermount"],
  ["SK2254", "Rectangular undermount"],
  ["C1337", "Rectangular undermount"],
  ["2210", "Oval undermount"],
  ["SS-1708", "Oval undermount"],
  ["SK25", "Oval drop-in, 3 faucet holes"],
  ["SK-9050-WH", "Rectangular drop-in, single faucet hole"],
]);

export const faucets = list("Faucet", [
  ["N88421-N1-BL-C", "Pull-down kitchen faucet, matte black"],
  ["N88421-N1-BN-C", "Pull-down kitchen faucet, brushed nickel"],
  ["N88486-BN", "Pull-down kitchen faucet, brushed nickel"],
  ["Drain-SS-01", "Kitchen sink basket strainer, stainless"],
  ["GD-Flange-2.5-BN", "Garbage disposal flange, brushed nickel"],
  ["GD-Flange-2.5-WH", "Garbage disposal flange, white"],
  ["82011", "Pop-up bathroom sink drain"],
]);
