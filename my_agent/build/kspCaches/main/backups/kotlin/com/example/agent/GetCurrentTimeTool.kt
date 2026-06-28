package com.example.agent

import com.google.adk.kt.tools.BaseTool
import com.google.adk.kt.tools.FunctionTool
import com.google.adk.kt.tools.ToolContext
import com.google.adk.kt.types.FunctionDeclaration
import com.google.adk.kt.types.Schema
import com.google.adk.kt.types.Type
import kotlin.Any
import kotlin.String
import kotlin.collections.Map

public class GetCurrentTimeTool(
  private val instance: TimeService,
) : FunctionTool("getCurrentTime", "Mock tool implementation", false, emptyMap(), false) {
  override suspend fun execute(context: ToolContext, args: Map<String, Any>): Any {
    val arg_city = (args["city"] as? String)
    if (arg_city == null) {
      return mapOf(FunctionTool.ERROR_KEY to "Missing required parameter city")
    }
    val result = instance.getCurrentTime(arg_city)
    return mapOf(BaseTool.RESULT_KEY to result.mapValues { it.value })
  }

  override fun declaration(): FunctionDeclaration? = FunctionDeclaration(
    name = "getCurrentTime",
    description = "Mock tool implementation",
    parameters = Schema(
      type = Type.OBJECT,
      properties = mapOf(
        "city" to Schema(
    type = Type.STRING,
    description = "Name of the city to get the time for"
  ),
      ),
      required = listOf("city"),
    )
  )
}
