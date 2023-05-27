const rules = {   
    Admin: {
        permission: [
            "position:list", 
            "position:create",
            "position:edit",
            "position:delete",

            "department:list",
            "department:edit",
            "department:create",
            "department:delete",
            
            "model:list",
            "model:edit",
            "model:create",
            "model:delete",

            "employee:list",
            "employee:create",
            "employee:edit",
            "employee:view",
            "employee:delete",

            "module:list",
            "module:create",
            "module:edit",
            "module:view",
            "module:delete"
            
        ]
    }
};

export default rules;