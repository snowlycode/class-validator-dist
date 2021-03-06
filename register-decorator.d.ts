import { ValidatorOptions } from "./validation/ValidatorOptions";
import { ValidatorConstraintInterface } from "./validation/ValidatorConstraintInterface";
export interface ValidationDecoratorOptions {
    /**
     * Target object to be validated.
     */
    target: Function;
    /**
     * Target object's property name to be validated.
     */
    propertyName: string;
    /**
     * Name of the validation that is being registered.
     */
    name?: string;
    /**
     * Indicates if this decorator will perform async validation.
     */
    async?: boolean;
    /**
     * Validator options.
     */
    options?: ValidatorOptions;
    /**
     * Array of validation constraints.
     */
    constraints?: any[];
    /**
     * Validator that performs validation.
     */
    validator: ValidatorConstraintInterface | Function;
}
/**
 * Registers a custom validation decorator.
 */
export declare function registerDecorator(options: ValidationDecoratorOptions): void;
//# sourceMappingURL=register-decorator.d.ts.map