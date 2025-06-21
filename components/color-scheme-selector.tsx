"use client"

import { useState, useEffect } from "react"
import { Palette, X, RotateCcw, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ColorScheme {
  name: string
  primary: string
  secondary: string
  accent?: string
}

const presetSchemes: ColorScheme[] = [
  {
    name: "Ocean Blue",
    primary: "#0891b2", // cyan-600
    secondary: "#2563eb", // blue-600
    accent: "#7c3aed", // violet-600
  },
  {
    name: "Forest Green",
    primary: "#059669", // emerald-600
    secondary: "#16a34a", // green-600
    accent: "#65a30d", // lime-600
  },
  {
    name: "Sunset Orange",
    primary: "#ea580c", // orange-600
    secondary: "#dc2626", // red-600
    accent: "#c2410c", // orange-700
  },
  {
    name: "Purple Dream",
    primary: "#9333ea", // purple-600
    secondary: "#c026d3", // fuchsia-600
    accent: "#7c3aed", // violet-600
  },
  {
    name: "Rose Gold",
    primary: "#e11d48", // rose-600
    secondary: "#f59e0b", // amber-500
    accent: "#ec4899", // pink-500
  },
  {
    name: "Midnight",
    primary: "#1e293b", // slate-800
    secondary: "#374151", // gray-700
    accent: "#6366f1", // indigo-500
  },
  {
    name: "Teal Mint",
    primary: "#0d9488", // teal-600
    secondary: "#10b981", // emerald-500
    accent: "#06b6d4", // cyan-500
  },
  {
    name: "Warm Coral",
    primary: "#f97316", // orange-500
    secondary: "#ef4444", // red-500
    accent: "#f59e0b", // amber-500
  },
]

export function ColorSchemeSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentScheme, setCurrentScheme] = useState<ColorScheme>(presetSchemes[0])
  const [customPrimary, setCustomPrimary] = useState(presetSchemes[0].primary)
  const [customSecondary, setCustomSecondary] = useState(presetSchemes[0].secondary)
  const [activeTab, setActiveTab] = useState<"presets" | "custom">("presets")

  // Apply color scheme to CSS custom properties
  const applyColorScheme = (scheme: ColorScheme) => {
    const root = document.documentElement
    root.style.setProperty("--color-primary", scheme.primary)
    root.style.setProperty("--color-secondary", scheme.secondary)
    root.style.setProperty("--color-accent", scheme.accent || scheme.primary)

    // Generate lighter and darker variants
    const primaryRgb = hexToRgb(scheme.primary)
    const secondaryRgb = hexToRgb(scheme.secondary)

    if (primaryRgb && secondaryRgb) {
      // Light variants (for backgrounds)
      root.style.setProperty("--color-primary-light", `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.1)`)
      root.style.setProperty(
        "--color-secondary-light",
        `rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.1)`,
      )

      // Medium variants (for borders)
      root.style.setProperty("--color-primary-medium", `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.2)`)
      root.style.setProperty(
        "--color-secondary-medium",
        `rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.2)`,
      )
    }
  }

  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: Number.parseInt(result[1], 16),
          g: Number.parseInt(result[2], 16),
          b: Number.parseInt(result[3], 16),
        }
      : null
  }

  // Handle preset selection
  const handlePresetSelect = (scheme: ColorScheme) => {
    setCurrentScheme(scheme)
    setCustomPrimary(scheme.primary)
    setCustomSecondary(scheme.secondary)
    applyColorScheme(scheme)
  }

  // Handle custom color changes
  const handleCustomColorChange = () => {
    const customScheme: ColorScheme = {
      name: "Custom",
      primary: customPrimary,
      secondary: customSecondary,
      accent: customPrimary,
    }
    setCurrentScheme(customScheme)
    applyColorScheme(customScheme)
  }

  // Reset to default
  const resetToDefault = () => {
    handlePresetSelect(presetSchemes[0])
    setActiveTab("presets")
  }

  // Apply initial color scheme
  useEffect(() => {
    applyColorScheme(currentScheme)
  }, [])

  // Apply custom colors when they change
  useEffect(() => {
    if (activeTab === "custom") {
      handleCustomColorChange()
    }
  }, [customPrimary, customSecondary, activeTab])

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full shadow-2xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:scale-110 transition-all duration-300 border-2 border-white/20"
          style={{
            background: `linear-gradient(135deg, ${currentScheme.primary}, ${currentScheme.secondary})`,
          }}
        >
          {isOpen ? <X className="h-6 w-6 text-white" /> : <Palette className="h-6 w-6 text-white" />}
        </Button>
      </div>

      {/* Color Scheme Panel */}
      {isOpen && (
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 translate-x-20 z-40">
          <Card className="w-80 shadow-2xl border-0 bg-white/95 backdrop-blur-md">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold text-gray-800">Color Scheme</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="outline"
                    className="text-xs"
                    style={{
                      borderColor: currentScheme.primary,
                      color: currentScheme.primary,
                    }}
                  >
                    {currentScheme.name}
                  </Badge>
                  <Button size="sm" variant="ghost" onClick={resetToDefault} className="h-8 w-8 p-0 hover:bg-gray-100">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Tab Selector */}
              <div className="flex bg-gray-100 rounded-lg p-1 mt-4">
                <button
                  onClick={() => setActiveTab("presets")}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                    activeTab === "presets" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Presets
                </button>
                <button
                  onClick={() => setActiveTab("custom")}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                    activeTab === "custom" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Custom
                </button>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              {activeTab === "presets" ? (
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {presetSchemes.map((scheme, index) => (
                    <div
                      key={index}
                      onClick={() => handlePresetSelect(scheme)}
                      className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                        currentScheme.name === scheme.name
                          ? "border-gray-300 bg-gray-50"
                          : "border-gray-100 hover:border-gray-200"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex space-x-1">
                          <div
                            className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                            style={{ backgroundColor: scheme.primary }}
                          />
                          <div
                            className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                            style={{ backgroundColor: scheme.secondary }}
                          />
                        </div>
                        <span className="font-medium text-gray-800">{scheme.name}</span>
                      </div>
                      {currentScheme.name === scheme.name && <Check className="h-5 w-5 text-green-600" />}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Primary Color</label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="color"
                        value={customPrimary}
                        onChange={(e) => setCustomPrimary(e.target.value)}
                        className="w-12 h-12 rounded-lg border-2 border-gray-200 cursor-pointer"
                      />
                      <input
                        type="text"
                        value={customPrimary}
                        onChange={(e) => setCustomPrimary(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-200 rounded-md text-sm font-mono"
                        placeholder="#000000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Secondary Color</label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="color"
                        value={customSecondary}
                        onChange={(e) => setCustomSecondary(e.target.value)}
                        className="w-12 h-12 rounded-lg border-2 border-gray-200 cursor-pointer"
                      />
                      <input
                        type="text"
                        value={customSecondary}
                        onChange={(e) => setCustomSecondary(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-200 rounded-md text-sm font-mono"
                        placeholder="#000000"
                      />
                    </div>
                  </div>

                  {/* Color Preview */}
                  <div className="p-4 rounded-lg border-2 border-gray-100 bg-gray-50">
                    <div className="text-sm font-medium text-gray-700 mb-2">Preview</div>
                    <div className="flex space-x-2">
                      <div
                        className="flex-1 h-8 rounded-md"
                        style={{
                          background: `linear-gradient(135deg, ${customPrimary}, ${customSecondary})`,
                        }}
                      />
                      <div
                        className="w-8 h-8 rounded-md border-2 border-white shadow-sm"
                        style={{ backgroundColor: customPrimary }}
                      />
                      <div
                        className="w-8 h-8 rounded-md border-2 border-white shadow-sm"
                        style={{ backgroundColor: customSecondary }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Current Colors Display */}
              <div className="mt-6 p-3 bg-gray-50 rounded-lg">
                <div className="text-xs font-medium text-gray-600 mb-2">Current Scheme</div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div
                      className="w-8 h-8 rounded-md border-2 border-white shadow-sm"
                      style={{ backgroundColor: currentScheme.primary }}
                      title={`Primary: ${currentScheme.primary}`}
                    />
                    <div
                      className="w-8 h-8 rounded-md border-2 border-white shadow-sm"
                      style={{ backgroundColor: currentScheme.secondary }}
                      title={`Secondary: ${currentScheme.secondary}`}
                    />
                  </div>
                  <div className="text-xs text-gray-500">{currentScheme.name}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-30" onClick={() => setIsOpen(false)} />}
    </>
  )
}
