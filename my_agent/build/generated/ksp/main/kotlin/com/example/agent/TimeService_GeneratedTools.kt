package com.example.agent

import com.google.adk.kt.tools.FunctionTool
import kotlin.collections.List

public fun TimeService.generatedTools(): List<FunctionTool> = listOf(
  GetCurrentTimeTool(this),
)
