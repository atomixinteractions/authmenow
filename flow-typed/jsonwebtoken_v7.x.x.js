// flow-typed signature: 46a342a48ee12f91875e9b322863126a
// flow-typed version: <<STUB>>/jsonwebtoken_v7.4.3/flow_v0.54.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'jsonwebtoken'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'jsonwebtoken' {
  declare interface SignOptions {
    expiresIn?: number | string,
    notBefore?: number | string,
    audience?: string | string[],
    algorithm?: 'RS256' | 'RS384' | 'RS512' | 'ES256' | 'ES384' | 'ES512' | 'HS256' | 'HS384' | 'HS512' | 'none',
    header?: object,
    encoding?: string,
    issuer?: string,
    subject?: string,
    jwtid?: string,
    keyid?: string,
    noTimestamp?: boolean,
  }

  declare function sign(payload: object, secretOrPrivateKey: string, options: SignOptions): string
  declare function sign(payload: object, secretOrPrivateKey: string, options: SignOptions, callback: (err: Error | null, token: string) => void): void
}
