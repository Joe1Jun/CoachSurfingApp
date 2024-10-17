//export enum to be used in the main index.ts
export var Permissions;
(function (Permissions) {
    Permissions["ADMIN"] = "ADMIN";
    Permissions["READ_ONLY"] = "READ_ONLY";
})(Permissions || (Permissions = {}));
export var LoyaltyLevels;
(function (LoyaltyLevels) {
    LoyaltyLevels[LoyaltyLevels["GOLD_USER"] = 0] = "GOLD_USER";
    LoyaltyLevels[LoyaltyLevels["SILVER_USER"] = 1] = "SILVER_USER";
    LoyaltyLevels[LoyaltyLevels["BRONZE_USER"] = 2] = "BRONZE_USER";
})(LoyaltyLevels || (LoyaltyLevels = {}));
