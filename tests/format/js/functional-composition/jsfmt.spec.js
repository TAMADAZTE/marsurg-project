run_spec(__dirname, ["babel", "flow", "typescript"], {
  errors: {
    acorn: [],
    espree: [],
  },
});
