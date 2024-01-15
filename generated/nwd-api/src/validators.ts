// @generated by
//     __             _____     _                 ___ ___
//  _ |  |___ ___ ___|   __|___| |_ ___ _____  __| | |_  |
// | |_| |_ -| . |   |__   |  _|   | -_|     ||. |_  |  _|
// |_____|___|___|_|_|_____|___|_|_|___|_|_|_|___| |_|___|
// v0.11.4                         -- www.JsonSchema42.org
//
import * as types from "./types.js";
/**
* @see {@link file:///home/elmerbulthuis/workspace/nationaal-watersportdiploma/specifications/nwd-api.yaml#/paths/%2Fecho/post/responses/200/content/application%2Fjson/schema}
*/
export function isResponsesSchema(value: unknown): value is types.ResponsesSchema {
return ((isMessageContainer(value)));
}
/**
* @description Object that contains a message
* @see {@link file:///home/elmerbulthuis/workspace/nationaal-watersportdiploma/specifications/nwd-api.yaml#/components/schemas/message-container}
*/
export function isMessageContainer(value: unknown): value is types.MessageContainer {
return ((value !== null) &&
(typeof value === "object") &&
(!Array.isArray(value)) &&
("message" in value) &&
(value["message"] !== undefined) &&
(
(()=>{
for(const propertyName in value) {
const propertyValue = value[propertyName as keyof typeof value];
if(propertyValue === undefined) {
continue;
}
switch(propertyName) {
case "message":
if(!isMessage(propertyValue)) {
return false;
}
break;
}
}
return true;
})()
));
}
/**
* @see {@link file:///home/elmerbulthuis/workspace/nationaal-watersportdiploma/specifications/nwd-api.yaml#/components/schemas/message-container/properties/message}
*/
export function isMessage(value: unknown): value is types.Message {
return ((typeof value === "string") &&
(value.length >= 1));
}
/**
* @see {@link file:///home/elmerbulthuis/workspace/nationaal-watersportdiploma/specifications/nwd-api.yaml#/paths/%2Fecho/post/requestBody/content/application%2Fjson/schema}
*/
export function isRequestBodySchema(value: unknown): value is types.RequestBodySchema {
return ((isMessageContainer(value)));
}
