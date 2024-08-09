export const ModelosYEspecificaciones = [
    // Llama-3
    {
        model: "https://huggingface.co/mlc-ai/Llama-3.1-8B-Instruct-q4f32_1-MLC",
        model_id: "Llama-3.1-8B-Instruct-q4f32_1-MLC-1k",
        model_name: "Llama 3.1",
        owner: "Meta",
        logo: "meta.png",
        vram_required_MB: 5295.7,
        low_resource_required: true,
        overrides: {
            context_window_size: 1024,
        },
    },
    // Phi
    {
        model: "https://huggingface.co/mlc-ai/Phi-3-mini-4k-instruct-q4f16_1-MLC",
        model_id: "Phi-3-mini-4k-instruct-q4f16_1-MLC-1k",
        model_name: "Phi 3 mint",
        owner: "Microsft",
        logo: "microsoft.png",
        vram_required_MB: 2520.07,
        low_resource_required: true,
        overrides: {
          context_window_size: 1024,
        },
    }, 
    // Gemma2
    {
      model: "https://huggingface.co/mlc-ai/gemma-2-2b-it-q4f16_1-MLC",
      model_id: "gemma-2-2b-it-q4f16_1-MLC",
      model_name: "Gemma 2B",
      owner: "Google",
      logo: "google.png",
      vram_required_MB: 1895.3,
      low_resource_required: false,
      required_features: ["shader-f16"],
      overrides: {
        context_window_size: 4096,
      },
    },
]

// export default ModelosYEspecificaciones