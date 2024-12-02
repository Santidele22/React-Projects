export const FILTERS = {
	ALL: "All",
	SELECTED: "Selected",
	COMPLETED: "Completed",
} as const;
// `as const` convierte el objeto en un tipo de solo lectura, asegurando que sus valores sean literales en lugar de tipos más generales (como `string`).
