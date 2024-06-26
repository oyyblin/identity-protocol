/* eslint-disable  @typescript-eslint/no-explicit-any */

// Generated by dts-gen initially, version "snarkjs": "^0.7.0"

declare module "snarkjs" {
  export type Proof = {
    pi_a: [string, string, string];
    pi_b: [[string, string], [string, string], [string, string]];
    pi_c: [string, string, string];
    protocol: string;
    curve: string;
  };

  export type WholeProof = {
    proof: Proof;
    publicSignals: string[];
  };

  export interface VKey {
    protocol: string;
    curve: string;
    nPublic: number;
    vk_alpha_1: string[];
    vk_beta_2: string[][];
    vk_gamma_2: string[][];
    vk_delta_2: string[][];
    vk_alphabeta_12?: string[][][];
    IC: string[][];
  }

  export const fflonk: {
    exportSolidityCallData: any;
    exportSolidityVerifier: any;
    fullProve: any;
    prove: any;
    setup: any;
    verify: any;
  };
  export const groth16: {
    exportSolidityCallData: any;
    fullProve: (
      _input: { [key: string]: bigint | bigint[] | string },
      wasmFile: Uint8Array | string,
      zkeyFileName: Uint8Array | string,
      logger?: any
    ) => Promise<WholeProof>;
    prove: any;
    verify: (_vk_verifier: VKey, _publicSignals: string[], _proof: Proof, logger?: any) => Promise<boolean>;
  };
  export const plonk: {
    exportSolidityCallData: any;
    fullProve: any;
    prove: any;
    setup: any;
    verify: any;
  };
  export const powersOfTau: {
    beacon: any;
    challengeContribute: any;
    contribute: any;
    convert: any;
    exportChallenge: any;
    exportJson: any;
    importResponse: any;
    newAccumulator: any;
    preparePhase2: any;
    truncate: any;
    verify: any;
  };
  export const r1cs: {
    exportJson: any;
    info: any;
    print: any;
  };
  export const wtns: {
    calculate: any;
    check: any;
    debug: any;
    exportJson: any;
  };
  export const zKey: {
    beacon: any;
    bellmanContribute: any;
    contribute: any;
    exportBellman: any;
    exportJson: any;
    exportSolidityVerifier: any;
    exportVerificationKey: any;
    importBellman: any;
    newZKey: any;
    verifyFromInit: any;
    verifyFromR1cs: any;
  };
}
