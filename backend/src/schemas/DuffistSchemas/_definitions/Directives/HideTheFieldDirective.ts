/* eslint-disable no-param-reassign */
import { SchemaDirectiveVisitor } from 'graphql-tools';
import {
  GraphQLField,
  GraphQLArgument,
  GraphQLInputField,
  GraphQLFieldResolver,
} from 'graphql';

interface IArgumentResolve extends GraphQLArgument {
  resolve: GraphQLFieldResolver<any, any>;
}
interface IInputFieldResolve extends GraphQLInputField {
  resolve: GraphQLFieldResolver<any, any>;
}

class HideTheFieldDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(
    field: GraphQLField<any, any>,
  ): GraphQLField<any, any> | void | null {
    field.resolve = async (): Promise<string> => 'This is secret! ;)';
  }

  visitArgumentDefinition(
    argument: IArgumentResolve,
  ): GraphQLArgument | void | null {
    argument.resolve = async (): Promise<string> => 'This is secret! ;)';
  }

  visitInputFieldDefinition(
    field: IInputFieldResolve,
  ): GraphQLInputField | void | null {
    field.resolve = async (): Promise<string> => 'This is secret! ;)';
  }
}

export default HideTheFieldDirective;
