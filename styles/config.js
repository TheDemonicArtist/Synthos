/* ------------------------------------------------------------------- */
/* Sheet ID
/* Your sheet ID
/* ------------------------------------------------------------------- */
let sheetID = "10OUtIDKFg6aAvw04nso9cciLV0gmvqt5Mt3k4-G8waE";


/* ------------------------------------------------------------------- */
/* All sheet pages
/* ------------------------------------------------------------------- */
let sheetPages = {

    masterlist: "masterlist",
    masterlistLog: "masterlist log",
    inventory: "inventory",
    inventoryLog: "inventory log",
    items: "items",
    traits: "traits",
    prompts: "prompts",
    faq: "faq",
    staff: "mods",
    styles: "styles",
    daycare: "daycare",
}


/* ------------------------------------------------------------------- */
/* All Site Options
/* ------------------------------------------------------------------- */
let options = {


    /* Index
    /* --------------------------------------------------------------- */
    index: {

        promptSheetPage: sheetPages.prompts,
        numOfPrompts: 3,

        staffSheetPage: sheetPages.staff,
        numOfStaff: 8,

        masterlistSheetPage: sheetPages.masterlist,
        numOfDesigns: 4,
    
    },


    /* Masterlist
    /* --------------------------------------------------------------- */
    masterlist: {

        sheetPage: sheetPages.masterlist,
        logSheetPage: sheetPages.masterlistLog,

        itemAmount: 12,
        itemOrder: "asc",

        filterColumn: 'Design Type',
        searchFilterParams: ['ID', 'Name', 'Species','Owner', 'Designer', 'Artist'],
        fauxFolderColumn: 'Character Type',

    },

    /* Daycare
    /* --------------------------------------------------------------- */
    daycare: {

        sheetPage: sheetPages.daycare,

        itemAmount: 12,
        itemOrder: "desc",

        filterColumn: 'Design Type',
        searchFilterParams: ['ID','Species', 'Designer'],
        fauxFolderColumn: 'Character Type',

    },


    /* Item Catalogue
    /* --------------------------------------------------------------- */
    items: {

        sheetPage: sheetPages.items,
    
        itemAmount: 24,
        itemOrder: "asc",
    
        filterColumn: 'Rarity',
        searchFilterParams: ['Item', 'Crafting', 'Found In'],
        fauxFolderColumn: 'Type',
    
    },

    /* User Inventory
    /* --------------------------------------------------------------- */
    Userinventory: {

        sheetPage: inventorysheetPages.inventory,
        itemSheetPage: inventorysheetPages.userinventory,
        designSheetPage: sheetPages.masterlist,
        logSheetPage: inventorysheetPages.inventoryLog,
    
        itemAmount: 24,
        sortTypes: ['Currency', 'Pokeball', 'Guardian', 'Crafting', 'Misc'],
        
        searchFilterParams: ['Username']
    
    },

    /* Inventory
    /* --------------------------------------------------------------- */
    inventory: {

        sheetPage: sheetPages.inventory,
        itemSheetPage: sheetPages.items,
        designSheetPage: sheetPages.masterlist,
        logSheetPage: sheetPages.inventoryLog,
    
        itemAmount: 24,
        sortTypes: ['Currency', 'Pokeball', 'Guardian', 'Crafting', 'Misc'],
        
        searchFilterParams: ['Username']
    
    },


    /* Prompts
    /* --------------------------------------------------------------- */
    prompts: {
    
        sheetPage: sheetPages.prompts,

        itemAmount: 24,
        itemOrder: "desc",

        searchFilterParams: ['Title'],
    
    },


    /* Traits
    /* --------------------------------------------------------------- */
    traits: {
    
        sheetPage: sheetPages.traits,

        itemAmount: 24,
        itemOrder: "asc",

        filterColumn: 'Rarity',
        searchFilterParams: ['Trait'],
        fauxFolderColumn: 'Type',
    
    },

    /* Styles
    /* --------------------------------------------------------------- */
    styles: {
    
        sheetPage: sheetPages.styles,

        itemAmount: 24,
        itemOrder: "asc",

        filterColumn: 'Obtained By',
        searchFilterParams: ['Obtained By'],
        fauxFolderColumn: 'Obtained By',
    
    },


    /* Staff
    /* --------------------------------------------------------------- */
    staff: {
    
        sheetPage: sheetPages.staff,
    
    },


    /* FAQ
    /* --------------------------------------------------------------- */
    faq: {
    
        sheetPage: sheetPages.faq,
    
        itemAmount: 24,
        itemOrder: "asc",
    
        searchFilterParams: ['Tags'],
    
    },


}
