// Configuration constants for the repository generator
export const CONFIG = {
  // HTTP methods to process
  HTTP_METHODS: [
    "get",
    "post",
    "put",
    "patch",
    "delete",
    "head",
    "options",
    "trace",
  ] as const,

  // OperationId validation rules
  OPERATION_ID: {
    MAX_LENGTH: 100,
    EXCLUDED_SUBSTRINGS: ["Endpoint", "Features"],
  },

  // Interface naming conventions
  INTERFACE_PREFIXES: {
    QUERY: "IQ_",
    PAYLOAD: "IP_",
    RESPONSE: "I_",
    REQUEST: "P_",
  },

  // File generation
  OUTPUT: {
    DIRECTORY: "generated/repositories",
    FILE_EXTENSION: ".ts",
  },
} as const;
