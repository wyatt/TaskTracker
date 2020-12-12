function validateEnv<T extends string = string>(
  key: keyof NodeJS.ProcessEnv,
  defaultValue?: T,
): T {
  const value = process.env[key] as T | undefined;

  if (!value) {
    if (typeof defaultValue !== "undefined") {
      return defaultValue;
    } else {
      throw new Error(`${key} is not defined in environment variables`);
    }
  }

  return value;
}

export class env {
  static readonly EDULINK_USERNAME = validateEnv("EDULINK_USERNAME");
  static readonly EDULINK_PASSWORD = validateEnv("EDULINK_PASSWORD");
  static readonly EDULINK_DOMAIN = validateEnv("EDULINK_DOMAIN");

  static readonly ESTABLISHMENT_ID: number = parseInt(
    validateEnv("ESTABLISHMENT_ID"),
  );

  static readonly RESCUETIME_KEY = validateEnv("RESCUETIME_KEY");
}
