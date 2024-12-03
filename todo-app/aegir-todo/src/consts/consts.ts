export const FILTERS = {
	ALL: "all",
	ACTIVE: "active",
	COMPLETED: "completed",
} as const;
// `as const` convierte el objeto en un tipo de solo lectura, asegurando que sus valores sean literales en lugar de tipos más generales (como `string`).
export const FILTERS_BTN = {
	[FILTERS.ALL]: {
		title: "All",
		href: `/?filter=${FILTERS.ALL}}`,
	},
	[FILTERS.COMPLETED]: {
		title: "Completed",
		href: `/?filter=${FILTERS.COMPLETED}`,
	},
	[FILTERS.ACTIVE]: {
		title: "Active",
		href: `/?filter=${FILTERS.ACTIVE}`,
	},
} as const;
