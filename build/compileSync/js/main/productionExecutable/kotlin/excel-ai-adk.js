(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-html-core.js', './kotlinx-coroutines-core.js', './html-internal-html-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-html-core.js'), require('./kotlinx-coroutines-core.js'), require('./html-internal-html-core-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'excel-ai-adk'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'excel-ai-adk'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'excel-ai-adk'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'excel-ai-adk'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'excel-ai-adk'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'excel-ai-adk'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'excel-ai-adk'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'excel-ai-adk'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'excel-ai-adk'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'excel-ai-adk'.");
    }
    globalThis['excel-ai-adk'] = factory(typeof globalThis['excel-ai-adk'] === 'undefined' ? {} : globalThis['excel-ai-adk'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-html-core'], globalThis['kotlinx-coroutines-core'], globalThis['html-internal-html-core-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_html_internal_html_core_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.u1;
  var Enum = kotlin_kotlin.$_$.q5;
  var protoOf = kotlin_kotlin.$_$.z4;
  var initMetadataForClass = kotlin_kotlin.$_$.l4;
  var VOID = kotlin_kotlin.$_$.c;
  var getStringHashCode = kotlin_kotlin.$_$.j4;
  var THROW_CCE = kotlin_kotlin.$_$.x5;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var emptyList = kotlin_kotlin.$_$.m2;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var Header = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.g6;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var H1 = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var P = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var initMetadataForObject = kotlin_kotlin.$_$.q4;
  var KMutableProperty0 = kotlin_kotlin.$_$.g5;
  var THROW_ISE = kotlin_kotlin.$_$.y5;
  var getLocalDelegateReference = kotlin_kotlin.$_$.h4;
  var plus = kotlin_kotlin.$_$.z2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var isCharSequence = kotlin_kotlin.$_$.t4;
  var trim = kotlin_kotlin.$_$.m5;
  var toString = kotlin_kotlin.$_$.b5;
  var charSequenceLength = kotlin_kotlin.$_$.c4;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.s1;
  var CoroutineImpl = kotlin_kotlin.$_$.w3;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var isInterface = kotlin_kotlin.$_$.u4;
  var initMetadataForLambda = kotlin_kotlin.$_$.p4;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var TextArea = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h3;
  var until = kotlin_kotlin.$_$.f5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.h2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.x;
  var listOf = kotlin_kotlin.$_$.t2;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(MsgKind, 'MsgKind', VOID, Enum);
  initMetadataForClass(ChatMessage, 'ChatMessage');
  initMetadataForClass(SuggestionItem, 'SuggestionItem');
  initMetadataForObject(ComposableSingletons$TaskpaneKt, 'ComposableSingletons$TaskpaneKt');
  initMetadataForLambda(App$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(App$sendTurn$slambda, CoroutineImpl, VOID, [1]);
  //endregion
  var Colors$stable;
  function get_SUGGESTIONS() {
    _init_properties_taskpane_kt__iia0b7();
    return SUGGESTIONS;
  }
  var SUGGESTIONS;
  var ChatMessage$stable;
  var MsgKind_User_instance;
  var MsgKind_Assistant_instance;
  var MsgKind_Error_instance;
  var MsgKind_Thinking_instance;
  var MsgKind_entriesInitialized;
  function MsgKind_initEntries() {
    if (MsgKind_entriesInitialized)
      return Unit_instance;
    MsgKind_entriesInitialized = true;
    MsgKind_User_instance = new MsgKind('User', 0);
    MsgKind_Assistant_instance = new MsgKind('Assistant', 1);
    MsgKind_Error_instance = new MsgKind('Error', 2);
    MsgKind_Thinking_instance = new MsgKind('Thinking', 3);
  }
  function MsgKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ChatMessage(id, text, kind, cellCount) {
    cellCount = cellCount === VOID ? 0 : cellCount;
    this.g29_1 = id;
    this.h29_1 = text;
    this.i29_1 = kind;
    this.j29_1 = cellCount;
  }
  protoOf(ChatMessage).toString = function () {
    return 'ChatMessage(id=' + this.g29_1 + ', text=' + this.h29_1 + ', kind=' + this.i29_1.toString() + ', cellCount=' + this.j29_1 + ')';
  };
  protoOf(ChatMessage).hashCode = function () {
    var result = this.g29_1;
    result = imul(result, 31) + getStringHashCode(this.h29_1) | 0;
    result = imul(result, 31) + this.i29_1.hashCode() | 0;
    result = imul(result, 31) + this.j29_1 | 0;
    return result;
  };
  protoOf(ChatMessage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChatMessage))
      return false;
    var tmp0_other_with_cast = other instanceof ChatMessage ? other : THROW_CCE();
    if (!(this.g29_1 === tmp0_other_with_cast.g29_1))
      return false;
    if (!(this.h29_1 === tmp0_other_with_cast.h29_1))
      return false;
    if (!this.i29_1.equals(tmp0_other_with_cast.i29_1))
      return false;
    if (!(this.j29_1 === tmp0_other_with_cast.j29_1))
      return false;
    return true;
  };
  function SuggestionItem(emoji, label, prompt) {
    this.k29_1 = emoji;
    this.l29_1 = label;
    this.m29_1 = prompt;
  }
  protoOf(SuggestionItem).toString = function () {
    return 'SuggestionItem(emoji=' + this.k29_1 + ', label=' + this.l29_1 + ', prompt=' + this.m29_1 + ')';
  };
  protoOf(SuggestionItem).hashCode = function () {
    var result = getStringHashCode(this.k29_1);
    result = imul(result, 31) + getStringHashCode(this.l29_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m29_1) | 0;
    return result;
  };
  protoOf(SuggestionItem).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SuggestionItem))
      return false;
    var tmp0_other_with_cast = other instanceof SuggestionItem ? other : THROW_CCE();
    if (!(this.k29_1 === tmp0_other_with_cast.k29_1))
      return false;
    if (!(this.l29_1 === tmp0_other_with_cast.l29_1))
      return false;
    if (!(this.m29_1 === tmp0_other_with_cast.m29_1))
      return false;
    return true;
  };
  function newSessionId() {
    _init_properties_taskpane_kt__iia0b7();
    // Inline function 'kotlin.js.asDynamic' call
    var crypto = window.crypto;
    var tmp;
    var tmp_0;
    if (crypto != null) {
      var tmp_1 = typeof crypto.randomUUID === 'function';
      tmp_0 = (!(tmp_1 == null) ? typeof tmp_1 === 'boolean' : false) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = crypto.randomUUID();
    } else {
      tmp = 'sess-' + Date.now() + '-' + Math.random().toString(16).slice(2);
    }
    return tmp;
  }
  function main() {
    _init_properties_taskpane_kt__iia0b7();
    Office.onReady(main$lambda);
  }
  function App($composer, $changed) {
    _init_properties_taskpane_kt__iia0b7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r19(-1068771056);
    if (!($changed === 0) || !$composer_0.e18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1068771056, $changed, -1, 'App (taskpane.kt:53)');
      }
      $composer_0.l18(63537132);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.j1a();
      var tmp;
      if (false || it === Companion_getInstance().d13_1) {
        // Inline function 'App.<anonymous>' call
        var value = mutableStateOf(newSessionId());
        this_0.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.n18();
      var sessionId$delegate = tmp0_group;
      $composer_0.l18(63539219);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.j1a();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().d13_1) {
        // Inline function 'App.<anonymous>' call
        // Inline function 'kotlin.collections.listOf' call
        var tmp$ret$4 = emptyList();
        var value_0 = mutableStateOf(tmp$ret$4);
        this_1.k1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.n18();
      var messages$delegate = tmp1_group;
      $composer_0.l18(63541504);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.j1a();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().d13_1) {
        // Inline function 'App.<anonymous>' call
        var value_1 = mutableStateOf('');
        this_2.k1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.n18();
      var input$delegate = tmp2_group;
      $composer_0.l18(63543203);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.j1a();
      var tmp_5;
      if (false || it_2 === Companion_getInstance().d13_1) {
        // Inline function 'App.<anonymous>' call
        var value_2 = mutableStateOf(false);
        this_3.k1a(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.n18();
      var busy$delegate = tmp3_group;
      $composer_0.l18(63544991);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = this_4.j1a();
      var tmp_7;
      if (false || it_3 === Companion_getInstance().d13_1) {
        // Inline function 'App.<anonymous>' call
        var value_3 = mutableStateOf(0);
        this_4.k1a(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.n18();
      var nextId$delegate = tmp4_group;
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 773894976, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = App$lambda_9;
      }
      var composer = $composer_1;
      sourceInformationMarkerStart($composer_1, -954370320, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_1.j1a();
      var tmp_9;
      if (false || it_4 === Companion_getInstance().d13_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value_4 = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.k1a(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmp1_group_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var wrapper = tmp1_group_0;
      var tmp0 = wrapper.e1f_1;
      sourceInformationMarkerEnd($composer_1);
      var scope = tmp0;
      var tmp_11 = App$lambda_1(messages$delegate).i();
      $composer_0.l18(63556965);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_5 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = this_5.j1a();
      var tmp_12;
      if (false || it_5 === Companion_getInstance().d13_1) {
        // Inline function 'App.<anonymous>' call
        var value_5 = App$slambda_0(null);
        this_5.k1a(value_5);
        tmp_12 = value_5;
      } else {
        tmp_12 = it_5;
      }
      var tmp_13 = tmp_12;
      var tmp5_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      $composer_0.n18();
      LaunchedEffect(tmp_11, tmp5_group, $composer_0, 0);
      $composer_0.l18(63621267);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_6 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = this_6.j1a();
      var tmp_14;
      if (false || it_6 === Companion_getInstance().d13_1) {
        // Inline function 'App.<anonymous>' call
        var value_6 = App$lambda_10;
        this_6.k1a(value_6);
        tmp_14 = value_6;
      } else {
        tmp_14 = it_6;
      }
      var tmp_15 = tmp_14;
      var tmp6_group = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
      $composer_0.n18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'App.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1681575217, true, App$lambda_11(scope, sessionId$delegate, messages$delegate, busy$delegate, input$delegate, nextId$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.vz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_7 = $composer_2.j1a();
      var tmp_16;
      if (invalid || it_7 === Companion_getInstance().d13_1) {
        // Inline function 'App.<anonymous>.<anonymous>' call
        var value_7 = ComposableLambda$invoke$ref_14(dispatchReceiver);
        $composer_2.k1a(value_7);
        tmp_16 = value_7;
      } else {
        tmp_16 = it_7;
      }
      var tmp_17 = tmp_16;
      var tmp0_0 = (tmp_17 == null ? true : !(tmp_17 == null)) ? tmp_17 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(tmp6_group, tmp0_0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.u12();
    }
    var tmp7_safe_receiver = $composer_0.s19();
    if (tmp7_safe_receiver == null)
      null;
    else {
      tmp7_safe_receiver.w1f(App$lambda_12($changed));
    }
  }
  function Banner(onNewChat, $composer, $changed) {
    _init_properties_taskpane_kt__iia0b7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r19(62005915);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.e19(onNewChat) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.e18()) {
      if (isTraceInProgress()) {
        traceEventStart(62005915, $dirty, -1, 'Banner (taskpane.kt:132)');
      }
      $composer_0.l18(-1791015551);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.j1a();
      var tmp;
      if (false || it === Companion_getInstance().d13_1) {
        // Inline function 'Banner.<anonymous>' call
        var value = Banner$lambda;
        this_0.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.n18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'Banner.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1669598524, true, Banner$lambda_0(onNewChat), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.vz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.j1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().d13_1) {
        // Inline function 'Banner.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_15(dispatchReceiver);
        $composer_1.k1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Header(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.u12();
    }
    var tmp1_safe_receiver = $composer_0.s19();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.w1f(Banner$lambda_1(onNewChat, $changed));
    }
  }
  function Thread(messages, busy, onSuggestion, $composer, $changed) {
    _init_properties_taskpane_kt__iia0b7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r19(1215404302);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.e19(messages) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f19(busy) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.e19(onSuggestion) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.e18()) {
      if (isTraceInProgress()) {
        traceEventStart(1215404302, $dirty, -1, 'Thread (taskpane.kt:153)');
      }
      $composer_0.l18(1538447869);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.j1a();
      var tmp;
      if (false || it === Companion_getInstance().d13_1) {
        // Inline function 'Thread.<anonymous>' call
        var value = Thread$lambda;
        this_0.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.n18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'Thread.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(102982703, true, Thread$lambda_0(messages, busy, onSuggestion), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.vz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.j1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().d13_1) {
        // Inline function 'Thread.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_16(dispatchReceiver);
        $composer_1.k1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.u12();
    }
    var tmp1_safe_receiver = $composer_0.s19();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.w1f(Thread$lambda_1(messages, busy, onSuggestion, $changed));
    }
  }
  function MessageBubble(msg, $composer, $changed) {
    _init_properties_taskpane_kt__iia0b7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r19(-269428359);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.vz(msg) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.e18()) {
      if (isTraceInProgress()) {
        traceEventStart(-269428359, $dirty, -1, 'MessageBubble (taskpane.kt:164)');
      }
      switch (msg.i29_1.p1_1) {
        case 0:
          $composer_0.l18(-1837575867);
          $composer_0.l18(-1837575763);
          // Inline function 'androidx.compose.runtime.cache' call

          var this_0 = $composer_0;
          // Inline function 'kotlin.let' call

          // Inline function 'kotlin.contracts.contract' call

          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call

          var it = this_0.j1a();
          var tmp;
          if (false || it === Companion_getInstance().d13_1) {
            // Inline function 'MessageBubble.<anonymous>' call
            var value = MessageBubble$lambda;
            this_0.k1a(value);
            tmp = value;
          } else {
            tmp = it;
          }

          var tmp_0 = tmp;
          var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          $composer_0.n18();
          // Inline function 'kotlin.run' call

          // Inline function 'kotlin.contracts.contract' call

          // Inline function 'MessageBubble.<anonymous>' call

          var dispatchReceiver = rememberComposableLambda(1191697186, true, MessageBubble$lambda_0(msg), $composer_0, 54);
          // Inline function 'androidx.compose.runtime.remember' call

          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call

          var invalid = $composer_1.vz(dispatchReceiver);
          // Inline function 'kotlin.let' call

          // Inline function 'kotlin.contracts.contract' call

          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call

          var it_0 = $composer_1.j1a();
          var tmp_1;
          if (invalid || it_0 === Companion_getInstance().d13_1) {
            // Inline function 'MessageBubble.<anonymous>.<anonymous>' call
            var value_0 = ComposableLambda$invoke$ref_17(dispatchReceiver);
            $composer_1.k1a(value_0);
            tmp_1 = value_0;
          } else {
            tmp_1 = it_0;
          }

          var tmp_2 = tmp_1;
          var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          sourceInformationMarkerEnd($composer_1);
          Div(tmp0_group, tmp0, $composer_0, 54, 0);
          $composer_0.n18();
          break;
        case 1:
          $composer_0.l18(-1837573062);
          $composer_0.l18(-1837573198);
          // Inline function 'androidx.compose.runtime.cache' call

          var this_1 = $composer_0;
          // Inline function 'kotlin.let' call

          // Inline function 'kotlin.contracts.contract' call

          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call

          var it_1 = this_1.j1a();
          var tmp_3;
          if (false || it_1 === Companion_getInstance().d13_1) {
            // Inline function 'MessageBubble.<anonymous>' call
            var value_1 = MessageBubble$lambda_1;
            this_1.k1a(value_1);
            tmp_3 = value_1;
          } else {
            tmp_3 = it_1;
          }

          var tmp_4 = tmp_3;
          var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
          $composer_0.n18();
          // Inline function 'kotlin.run' call

          // Inline function 'kotlin.contracts.contract' call

          // Inline function 'MessageBubble.<anonymous>' call

          var dispatchReceiver_0 = rememberComposableLambda(-535719399, true, MessageBubble$lambda_2(msg), $composer_0, 54);
          // Inline function 'androidx.compose.runtime.remember' call

          var $composer_2 = $composer_0;
          sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call

          var invalid_0 = $composer_2.vz(dispatchReceiver_0);
          // Inline function 'kotlin.let' call

          // Inline function 'kotlin.contracts.contract' call

          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call

          var it_2 = $composer_2.j1a();
          var tmp_5;
          if (invalid_0 || it_2 === Companion_getInstance().d13_1) {
            // Inline function 'MessageBubble.<anonymous>.<anonymous>' call
            var value_2 = ComposableLambda$invoke$ref_19(dispatchReceiver_0);
            $composer_2.k1a(value_2);
            tmp_5 = value_2;
          } else {
            tmp_5 = it_2;
          }

          var tmp_6 = tmp_5;
          var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
          sourceInformationMarkerEnd($composer_2);
          Div(tmp1_group, tmp0_0, $composer_0, 54, 0);
          $composer_0.n18();
          break;
        case 2:
          $composer_0.l18(-1837563034);
          $composer_0.l18(-1837562930);
          // Inline function 'androidx.compose.runtime.cache' call

          var this_2 = $composer_0;
          // Inline function 'kotlin.let' call

          // Inline function 'kotlin.contracts.contract' call

          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call

          var it_3 = this_2.j1a();
          var tmp_7;
          if (false || it_3 === Companion_getInstance().d13_1) {
            // Inline function 'MessageBubble.<anonymous>' call
            var value_3 = MessageBubble$lambda_3;
            this_2.k1a(value_3);
            tmp_7 = value_3;
          } else {
            tmp_7 = it_3;
          }

          var tmp_8 = tmp_7;
          var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
          $composer_0.n18();
          // Inline function 'kotlin.run' call

          // Inline function 'kotlin.contracts.contract' call

          // Inline function 'MessageBubble.<anonymous>' call

          var dispatchReceiver_1 = rememberComposableLambda(-782032486, true, MessageBubble$lambda_4(msg), $composer_0, 54);
          // Inline function 'androidx.compose.runtime.remember' call

          var $composer_3 = $composer_0;
          sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call

          var invalid_1 = $composer_3.vz(dispatchReceiver_1);
          // Inline function 'kotlin.let' call

          // Inline function 'kotlin.contracts.contract' call

          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call

          var it_4 = $composer_3.j1a();
          var tmp_9;
          if (invalid_1 || it_4 === Companion_getInstance().d13_1) {
            // Inline function 'MessageBubble.<anonymous>.<anonymous>' call
            var value_4 = ComposableLambda$invoke$ref_20(dispatchReceiver_1);
            $composer_3.k1a(value_4);
            tmp_9 = value_4;
          } else {
            tmp_9 = it_4;
          }

          var tmp_10 = tmp_9;
          var tmp0_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
          sourceInformationMarkerEnd($composer_3);
          Div(tmp2_group, tmp0_1, $composer_0, 54, 0);
          $composer_0.n18();
          break;
        case 3:
          $composer_0.l18(-1837560442);
          $composer_0.l18(-1837560369);
          // Inline function 'androidx.compose.runtime.cache' call

          var this_3 = $composer_0;
          // Inline function 'kotlin.let' call

          // Inline function 'kotlin.contracts.contract' call

          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call

          var it_5 = this_3.j1a();
          var tmp_11;
          if (false || it_5 === Companion_getInstance().d13_1) {
            // Inline function 'MessageBubble.<anonymous>' call
            var value_5 = MessageBubble$lambda_5;
            this_3.k1a(value_5);
            tmp_11 = value_5;
          } else {
            tmp_11 = it_5;
          }

          var tmp_12 = tmp_11;
          var tmp3_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
          $composer_0.n18();
          Div(tmp3_group, ComposableSingletons$TaskpaneKt_getInstance().x29_1, $composer_0, 54, 0);
          $composer_0.n18();
          break;
        default:
          $composer_0.l18(-1837576649);
          $composer_0.n18();
          noWhenBranchMatchedException();
          break;
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.u12();
    }
    var tmp4_safe_receiver = $composer_0.s19();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.w1f(MessageBubble$lambda_6(msg, $changed));
    }
  }
  function EmptyState(busy, onSuggestion, $composer, $changed) {
    _init_properties_taskpane_kt__iia0b7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r19(1880215750);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f19(busy) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.e19(onSuggestion) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.e18()) {
      if (isTraceInProgress()) {
        traceEventStart(1880215750, $dirty, -1, 'EmptyState (taskpane.kt:183)');
      }
      $composer_0.l18(-1829017263);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.j1a();
      var tmp;
      if (false || it === Companion_getInstance().d13_1) {
        // Inline function 'EmptyState.<anonymous>' call
        var value = EmptyState$lambda;
        this_0.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.n18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'EmptyState.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(458857861, true, EmptyState$lambda_0(busy, onSuggestion), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.vz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.j1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().d13_1) {
        // Inline function 'EmptyState.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_25(dispatchReceiver);
        $composer_1.k1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.u12();
    }
    var tmp1_safe_receiver = $composer_0.s19();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.w1f(EmptyState$lambda_1(busy, onSuggestion, $changed));
    }
  }
  function Composer(input, busy, onInputChange, onSend, $composer, $changed) {
    _init_properties_taskpane_kt__iia0b7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r19(-871110459);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.vz(input) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f19(busy) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.e19(onInputChange) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.e19(onSend) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.e18()) {
      if (isTraceInProgress()) {
        traceEventStart(-871110459, $dirty, -1, 'Composer (taskpane.kt:210)');
      }
      $composer_0.l18(1550878423);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.j1a();
      var tmp;
      if (false || it === Companion_getInstance().d13_1) {
        // Inline function 'Composer.<anonymous>' call
        var value = Composer$lambda;
        this_0.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.n18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'Composer.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-762370522, true, Composer$lambda_0(input, onInputChange, onSend, busy), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.vz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.j1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().d13_1) {
        // Inline function 'Composer.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_28(dispatchReceiver);
        $composer_1.k1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.u12();
    }
    var tmp1_safe_receiver = $composer_0.s19();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.w1f(Composer$lambda_1(input, busy, onInputChange, onSend, $changed));
    }
  }
  function applyActions(actions, $completion) {
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0 = Excel.run(applyActions$lambda(actions));
    return await_0(tmp$ret$0, $completion);
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function ComposableSingletons$TaskpaneKt$lambda_1$lambda_b6y729($this$renderComposable, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1606800664, $changed, -1, 'ComposableSingletons$TaskpaneKt.lambda-1.<anonymous> (taskpane.kt:47)');
    }
    App($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function ComposableSingletons$TaskpaneKt$lambda_2$lambda_v0jduo($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1330777918, $changed, -1, 'ComposableSingletons$TaskpaneKt.lambda-2.<anonymous> (taskpane.kt:135)');
    }
    Text('M', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function ComposableSingletons$TaskpaneKt$lambda_3$lambda_26wwsh($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-17538211, $changed, -1, 'ComposableSingletons$TaskpaneKt.lambda-3.<anonymous> (taskpane.kt:135)');
    }
    $composer_0.l18(-342684525);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.j1a();
    var tmp;
    if (false || it === Companion_getInstance().d13_1) {
      // Inline function 'ComposableSingletons$TaskpaneKt.lambda-3.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$TaskpaneKt$lambda_3$lambda$lambda_kvlamk;
      $composer_0.k1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.n18();
    Div(tmp0_group, ComposableSingletons$TaskpaneKt_getInstance().o29_1, $composer_0, 54, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$TaskpaneKt$lambda_3$lambda$lambda_kvlamk($this$Div) {
    $this$Div.n22(['banner-icon-box']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function ComposableSingletons$TaskpaneKt$lambda_4$lambda_qmpk9q($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(392097417, $changed, -1, 'ComposableSingletons$TaskpaneKt.lambda-4.<anonymous> (taskpane.kt:138)');
    }
    Text('M-AI', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function ComposableSingletons$TaskpaneKt$lambda_5$lambda_fks0n7($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(281124840, $changed, -1, 'ComposableSingletons$TaskpaneKt.lambda-5.<anonymous> (taskpane.kt:139)');
    }
    Text('Build a sheet, then keep refining it.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function ComposableSingletons$TaskpaneKt$lambda_6$lambda_d8ugf0($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(372077382, $changed, -1, 'ComposableSingletons$TaskpaneKt.lambda-6.<anonymous> (taskpane.kt:138)');
    }
    H1(null, ComposableSingletons$TaskpaneKt_getInstance().q29_1, $composer_0, 48, 1);
    P(null, ComposableSingletons$TaskpaneKt_getInstance().r29_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function ComposableSingletons$TaskpaneKt$lambda_7$lambda_syn4hx($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(366728054, $changed, -1, 'ComposableSingletons$TaskpaneKt.lambda-7.<anonymous> (taskpane.kt:144)');
    }
    Text('New', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function ComposableSingletons$TaskpaneKt$lambda_8$lambda_50nfq($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(826404477, $changed, -1, 'ComposableSingletons$TaskpaneKt.lambda-8.<anonymous> (taskpane.kt:177)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function ComposableSingletons$TaskpaneKt$lambda_9$lambda_soltmh($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1435206566, $changed, -1, 'ComposableSingletons$TaskpaneKt.lambda-9.<anonymous> (taskpane.kt:177)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function ComposableSingletons$TaskpaneKt$lambda_10$lambda_3qz3rv($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1142820741, $changed, -1, 'ComposableSingletons$TaskpaneKt.lambda-10.<anonymous> (taskpane.kt:177)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function ComposableSingletons$TaskpaneKt$lambda_11$lambda_p2ndac($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1028345573, $changed, -1, 'ComposableSingletons$TaskpaneKt.lambda-11.<anonymous> (taskpane.kt:177)');
    }
    Span(null, ComposableSingletons$TaskpaneKt_getInstance().u29_1, $composer_0, 48, 1);
    Span(null, ComposableSingletons$TaskpaneKt_getInstance().v29_1, $composer_0, 48, 1);
    Span(null, ComposableSingletons$TaskpaneKt_getInstance().w29_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function ComposableSingletons$TaskpaneKt$lambda_12$lambda_h4u7ml($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-2023646076, $changed, -1, 'ComposableSingletons$TaskpaneKt.lambda-12.<anonymous> (taskpane.kt:185)');
    }
    Text('Describe the sheet you want.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function ComposableSingletons$TaskpaneKt$lambda_13$lambda_bos9fm($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(616653499, $changed, -1, 'ComposableSingletons$TaskpaneKt.lambda-13.<anonymous> (taskpane.kt:187)');
    }
    Text('Then ask follow-ups like "add a totals row" or "make column B a percentage" \u2014 I\'ll remember the context.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function ComposableSingletons$TaskpaneKt$lambda_14$lambda_uipbhb($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-22518390, $changed, -1, 'ComposableSingletons$TaskpaneKt.lambda-14.<anonymous> (taskpane.kt:229)');
    }
    Text('Enter to send \xB7 Shift+Enter for newline', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function ComposableSingletons$TaskpaneKt$lambda_15$lambda_1p2uf4($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-691923614, $changed, -1, 'ComposableSingletons$TaskpaneKt.lambda-15.<anonymous> (taskpane.kt:235)');
    }
    Text('Send', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$TaskpaneKt() {
    ComposableSingletons$TaskpaneKt_instance = this;
    var tmp = this;
    tmp.n29_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1606800664, false, ComposableSingletons$TaskpaneKt$lambda_1$lambda_b6y729));
    var tmp_0 = this;
    tmp_0.o29_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(1330777918, false, ComposableSingletons$TaskpaneKt$lambda_2$lambda_v0jduo));
    var tmp_1 = this;
    tmp_1.p29_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-17538211, false, ComposableSingletons$TaskpaneKt$lambda_3$lambda_26wwsh));
    var tmp_2 = this;
    tmp_2.q29_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(392097417, false, ComposableSingletons$TaskpaneKt$lambda_4$lambda_qmpk9q));
    var tmp_3 = this;
    tmp_3.r29_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(281124840, false, ComposableSingletons$TaskpaneKt$lambda_5$lambda_fks0n7));
    var tmp_4 = this;
    tmp_4.s29_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(372077382, false, ComposableSingletons$TaskpaneKt$lambda_6$lambda_d8ugf0));
    var tmp_5 = this;
    tmp_5.t29_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(366728054, false, ComposableSingletons$TaskpaneKt$lambda_7$lambda_syn4hx));
    var tmp_6 = this;
    tmp_6.u29_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(826404477, false, ComposableSingletons$TaskpaneKt$lambda_8$lambda_50nfq));
    var tmp_7 = this;
    tmp_7.v29_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(1435206566, false, ComposableSingletons$TaskpaneKt$lambda_9$lambda_soltmh));
    var tmp_8 = this;
    tmp_8.w29_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(1142820741, false, ComposableSingletons$TaskpaneKt$lambda_10$lambda_3qz3rv));
    var tmp_9 = this;
    tmp_9.x29_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(-1028345573, false, ComposableSingletons$TaskpaneKt$lambda_11$lambda_p2ndac));
    var tmp_10 = this;
    tmp_10.y29_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-2023646076, false, ComposableSingletons$TaskpaneKt$lambda_12$lambda_h4u7ml));
    var tmp_11 = this;
    tmp_11.z29_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(616653499, false, ComposableSingletons$TaskpaneKt$lambda_13$lambda_bos9fm));
    var tmp_12 = this;
    tmp_12.a2a_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-22518390, false, ComposableSingletons$TaskpaneKt$lambda_14$lambda_uipbhb));
    var tmp_13 = this;
    tmp_13.b2a_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-691923614, false, ComposableSingletons$TaskpaneKt$lambda_15$lambda_1p2uf4));
  }
  var ComposableSingletons$TaskpaneKt_instance;
  function ComposableSingletons$TaskpaneKt_getInstance() {
    if (ComposableSingletons$TaskpaneKt_instance == null)
      new ComposableSingletons$TaskpaneKt();
    return ComposableSingletons$TaskpaneKt_instance;
  }
  function App$lambda($sessionId$delegate) {
    _init_properties_taskpane_kt__iia0b7();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('sessionId', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $sessionId$delegate.i1();
  }
  function App$lambda_0($sessionId$delegate, _set____db54di) {
    _init_properties_taskpane_kt__iia0b7();
    getLocalDelegateReference('sessionId', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $sessionId$delegate.mn(_set____db54di);
    return Unit_instance;
  }
  function App$lambda_1($messages$delegate) {
    _init_properties_taskpane_kt__iia0b7();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('messages', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $messages$delegate.i1();
  }
  function App$lambda_2($messages$delegate, _set____db54di) {
    _init_properties_taskpane_kt__iia0b7();
    getLocalDelegateReference('messages', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $messages$delegate.mn(_set____db54di);
    return Unit_instance;
  }
  function App$lambda_3($input$delegate) {
    _init_properties_taskpane_kt__iia0b7();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('input', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $input$delegate.i1();
  }
  function App$lambda_4($input$delegate, _set____db54di) {
    _init_properties_taskpane_kt__iia0b7();
    getLocalDelegateReference('input', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $input$delegate.mn(_set____db54di);
    return Unit_instance;
  }
  function App$lambda_5($busy$delegate) {
    _init_properties_taskpane_kt__iia0b7();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('busy', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $busy$delegate.i1();
  }
  function App$lambda_6($busy$delegate, _set____db54di) {
    _init_properties_taskpane_kt__iia0b7();
    getLocalDelegateReference('busy', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $busy$delegate.mn(_set____db54di);
    return Unit_instance;
  }
  function App$lambda_7($nextId$delegate) {
    _init_properties_taskpane_kt__iia0b7();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('nextId', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $nextId$delegate.i1();
  }
  function App$lambda_8($nextId$delegate, _set____db54di) {
    _init_properties_taskpane_kt__iia0b7();
    getLocalDelegateReference('nextId', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $nextId$delegate.mn(_set____db54di);
    return Unit_instance;
  }
  function App$addMsg(nextId$delegate, messages$delegate, text, kind, cellCount) {
    cellCount = cellCount === VOID ? 0 : cellCount;
    var _unary__edvuaz = App$lambda_7(nextId$delegate);
    App$lambda_8(nextId$delegate, _unary__edvuaz + 1 | 0);
    var id = _unary__edvuaz;
    App$lambda_2(messages$delegate, plus(App$lambda_1(messages$delegate), new ChatMessage(id, text, kind, cellCount)));
    return id;
  }
  function App$removeMsg(messages$delegate, id) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = App$lambda_1(messages$delegate);
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      // Inline function 'App.removeMsg.<anonymous>' call
      if (!(element.g29_1 === id)) {
        destination.d(element);
      }
    }
    App$lambda_2(messages$delegate, destination);
  }
  function App$sendTurn(scope, input$delegate, busy$delegate, nextId$delegate, messages$delegate, sessionId$delegate) {
    // Inline function 'kotlin.text.trim' call
    var this_0 = App$lambda_3(input$delegate);
    var prompt = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(prompt) === 0) {
      tmp = true;
    } else {
      tmp = App$lambda_5(busy$delegate);
    }
    if (tmp)
      return Unit_instance;
    App$lambda_6(busy$delegate, true);
    App$lambda_4(input$delegate, '');
    App$addMsg(nextId$delegate, messages$delegate, prompt, MsgKind_User_getInstance());
    var thinkingId = App$addMsg(nextId$delegate, messages$delegate, '', MsgKind_Thinking_getInstance());
    launch(scope, VOID, VOID, App$sendTurn$slambda_0(prompt, thinkingId, sessionId$delegate, messages$delegate, nextId$delegate, busy$delegate, null));
  }
  function main$lambda() {
    _init_properties_taskpane_kt__iia0b7();
    return renderComposable('root', ComposableSingletons$TaskpaneKt_getInstance().n29_1);
  }
  function App$lambda_9() {
    _init_properties_taskpane_kt__iia0b7();
    return EmptyCoroutineContext_getInstance();
  }
  function App$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(App$slambda).n1h = function ($this$LaunchedEffect, $completion) {
    var tmp = this.o1h($this$LaunchedEffect, $completion);
    tmp.t7_1 = Unit_instance;
    tmp.u7_1 = null;
    return tmp.z7();
  };
  protoOf(App$slambda).n8 = function (p1, $completion) {
    return this.n1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(App$slambda).z7 = function () {
    var suspendResult = this.t7_1;
    $sm: do
      try {
        var tmp = this.r7_1;
        if (tmp === 0) {
          this.s7_1 = 1;
          var tmp0_safe_receiver = document.getElementById('thread');
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.scrollTop = tmp0_safe_receiver.scrollHeight;
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.u7_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(App$slambda).o1h = function ($this$LaunchedEffect, completion) {
    var i = new App$slambda(completion);
    i.k2a_1 = $this$LaunchedEffect;
    return i;
  };
  function App$slambda_0(resultContinuation) {
    var i = new App$slambda(resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.n1h($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function App$lambda_10($this$Div) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Div.n22(['app']);
    return Unit_instance;
  }
  function App$lambda$lambda($sessionId$delegate, $messages$delegate) {
    return function () {
      App$lambda_0($sessionId$delegate, newSessionId());
      App$lambda_2($messages$delegate, emptyList());
      return Unit_instance;
    };
  }
  function App$lambda$lambda_0($input$delegate, $scope, $busy$delegate, $nextId$delegate, $messages$delegate, $sessionId$delegate) {
    return function (s) {
      App$lambda_4($input$delegate, s.m29_1);
      App$sendTurn($scope, $input$delegate, $busy$delegate, $nextId$delegate, $messages$delegate, $sessionId$delegate);
      return Unit_instance;
    };
  }
  function App$lambda$lambda_1($input$delegate) {
    return function (it) {
      App$lambda_4($input$delegate, it);
      return Unit_instance;
    };
  }
  function App$lambda$lambda_2($scope, $input$delegate, $busy$delegate, $nextId$delegate, $messages$delegate, $sessionId$delegate) {
    return function () {
      App$sendTurn($scope, $input$delegate, $busy$delegate, $nextId$delegate, $messages$delegate, $sessionId$delegate);
      return Unit_instance;
    };
  }
  function App$lambda_11($scope, $sessionId$delegate, $messages$delegate, $busy$delegate, $input$delegate, $nextId$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1681575217, $changed, -1, 'App.<anonymous> (taskpane.kt:120)');
      }
      $composer_0.l18(-522422442);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.j1a();
      var tmp;
      if (false || it === Companion_getInstance().d13_1) {
        // Inline function 'App.<anonymous>.<anonymous>.<anonymous>' call
        var value = App$lambda$lambda($sessionId$delegate, $messages$delegate);
        $composer_0.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.n18();
      Banner(tmp0_group, $composer_0, 6);
      var tmp_1 = App$lambda_1($messages$delegate);
      var tmp_2 = App$lambda_5($busy$delegate);
      $composer_0.l18(-522419195);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.e19($scope);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.j1a();
      var tmp_3;
      if (invalid || it_0 === Companion_getInstance().d13_1) {
        // Inline function 'App.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = App$lambda$lambda_0($input$delegate, $scope, $busy$delegate, $nextId$delegate, $messages$delegate, $sessionId$delegate);
        $composer_0.k1a(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.n18();
      Thread(tmp_1, tmp_2, tmp1_group, $composer_0, 0);
      var tmp_5 = App$lambda_3($input$delegate);
      var tmp_6 = App$lambda_5($busy$delegate);
      $composer_0.l18(-522416114);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.j1a();
      var tmp_7;
      if (false || it_1 === Companion_getInstance().d13_1) {
        // Inline function 'App.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = App$lambda$lambda_1($input$delegate);
        $composer_0.k1a(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.n18();
      $composer_0.l18(-522414930);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.e19($scope);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_0.j1a();
      var tmp_9;
      if (invalid_0 || it_2 === Companion_getInstance().d13_1) {
        // Inline function 'App.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = App$lambda$lambda_2($scope, $input$delegate, $busy$delegate, $nextId$delegate, $messages$delegate, $sessionId$delegate);
        $composer_0.k1a(value_2);
        tmp_9 = value_2;
      } else {
        tmp_9 = it_2;
      }
      var tmp_10 = tmp_9;
      var tmp3_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_0.n18();
      Composer(tmp_5, tmp_6, tmp2_group, tmp3_group, $composer_0, 384);
      var tmp_11;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_11 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function App$lambda_12($$changed) {
    return function ($composer, $force) {
      App($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Banner$lambda($this$Header) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Header.n22(['banner']);
    return Unit_instance;
  }
  function Banner$lambda$lambda($this$Div) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Div.n22(['banner-icon']);
    return Unit_instance;
  }
  function Banner$lambda$lambda_0($this$Div) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Div.n22(['banner-text']);
    return Unit_instance;
  }
  function Banner$lambda$lambda$lambda($onNewChat) {
    return function (it) {
      $onNewChat();
      return Unit_instance;
    };
  }
  function Banner$lambda$lambda_1($onNewChat) {
    return function ($this$Button) {
      $this$Button.n22(['new-chat-btn']);
      $this$Button.s22(Banner$lambda$lambda$lambda($onNewChat));
      return Unit_instance;
    };
  }
  function Banner$lambda_0($onNewChat) {
    return function ($this$Header, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1669598524, $changed, -1, 'Banner.<anonymous> (taskpane.kt:134)');
      }
      $composer_0.l18(757234213);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.j1a();
      var tmp;
      if (false || it === Companion_getInstance().d13_1) {
        // Inline function 'Banner.<anonymous>.<anonymous>.<anonymous>' call
        var value = Banner$lambda$lambda;
        $composer_0.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.n18();
      Div(tmp0_group, ComposableSingletons$TaskpaneKt_getInstance().p29_1, $composer_0, 54, 0);
      $composer_0.l18(757237861);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.j1a();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().d13_1) {
        // Inline function 'Banner.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = Banner$lambda$lambda_0;
        $composer_0.k1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.n18();
      Div(tmp1_group, ComposableSingletons$TaskpaneKt_getInstance().s29_1, $composer_0, 54, 0);
      $composer_0.l18(757242750);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.vz($onNewChat);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.j1a();
      var tmp_3;
      if (invalid || it_1 === Companion_getInstance().d13_1) {
        // Inline function 'Banner.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = Banner$lambda$lambda_1($onNewChat);
        $composer_0.k1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.n18();
      Button(tmp2_group, ComposableSingletons$TaskpaneKt_getInstance().t29_1, $composer_0, 48, 0);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function Banner$lambda_1($onNewChat, $$changed) {
    return function ($composer, $force) {
      Banner($onNewChat, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Thread$lambda($this$Div) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Div.n22(['thread', 'mesum-scroll']);
    $this$Div.o22('thread');
    return Unit_instance;
  }
  function Thread$lambda_0($messages, $busy, $onSuggestion) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(102982703, $changed, -1, 'Thread.<anonymous> (taskpane.kt:155)');
      }
      if ($messages.p()) {
        $composer_0.l18(1682637827);
        EmptyState($busy, $onSuggestion, $composer_0, 0);
        $composer_0.n18();
      } else {
        $composer_0.l18(1682697595);
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = $messages.f();
        while (tmp0_iterator.g()) {
          var element = tmp0_iterator.h();
          // Inline function 'Thread.<anonymous>.<anonymous>.<anonymous>' call
          MessageBubble(element, $composer_0, 0);
        }
        $composer_0.n18();
      }
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function Thread$lambda_1($messages, $busy, $onSuggestion, $$changed) {
    return function ($composer, $force) {
      Thread($messages, $busy, $onSuggestion, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function MessageBubble$lambda($this$Div) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Div.n22(['msg', 'user']);
    return Unit_instance;
  }
  function MessageBubble$lambda_0($msg) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1191697186, $changed, -1, 'MessageBubble.<anonymous> (taskpane.kt:166)');
      }
      Text($msg.h29_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function MessageBubble$lambda_1($this$Div) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Div.n22(['msg', 'assistant']);
    return Unit_instance;
  }
  function MessageBubble$lambda$lambda($this$Div) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Div.n22(['meta']);
    return Unit_instance;
  }
  function MessageBubble$lambda$lambda_0($msg) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(2048642687, $changed, -1, 'MessageBubble.<anonymous>.<anonymous> (taskpane.kt:171)');
      }
      Text('Wrote ' + $msg.j29_1 + ' cell' + ($msg.j29_1 === 1 ? '' : 's') + ' to the sheet.', $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function MessageBubble$lambda_2($msg) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-535719399, $changed, -1, 'MessageBubble.<anonymous> (taskpane.kt:168)');
      }
      Text($msg.h29_1, $composer_0, 0);
      if ($msg.j29_1 > 0) {
        $composer_0.l18(-1644828667);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.j1a();
        var tmp;
        if (false || it === Companion_getInstance().d13_1) {
          // Inline function 'MessageBubble.<anonymous>.<anonymous>.<anonymous>' call
          var value = MessageBubble$lambda$lambda;
          $composer_0.k1a(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.n18();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'MessageBubble.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(2048642687, true, MessageBubble$lambda$lambda_0($msg), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.vz(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.j1a();
        var tmp_1;
        if (invalid || it_0 === Companion_getInstance().d13_1) {
          // Inline function 'MessageBubble.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_18(dispatchReceiver);
          $composer_1.k1a(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp0_group, tmp0, $composer_0, 54, 0);
      }
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function MessageBubble$lambda_3($this$Div) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Div.n22(['msg', 'error']);
    return Unit_instance;
  }
  function MessageBubble$lambda_4($msg) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-782032486, $changed, -1, 'MessageBubble.<anonymous> (taskpane.kt:175)');
      }
      Text($msg.h29_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function MessageBubble$lambda_5($this$Div) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Div.n22(['thinking-dots']);
    return Unit_instance;
  }
  function MessageBubble$lambda_6($msg, $$changed) {
    return function ($composer, $force) {
      MessageBubble($msg, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function EmptyState$lambda($this$Div) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Div.n22(['empty-state']);
    $this$Div.o22('empty-state');
    return Unit_instance;
  }
  function EmptyState$lambda$lambda($this$Div) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Div.n22(['empty-title']);
    return Unit_instance;
  }
  function EmptyState$lambda$lambda_0($this$Div) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Div.n22(['empty-sub']);
    return Unit_instance;
  }
  function EmptyState$lambda$lambda_1($this$Div) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Div.n22(['suggestions']);
    return Unit_instance;
  }
  function EmptyState$lambda$lambda$lambda$lambda($onSuggestion, $s) {
    return function (it) {
      $onSuggestion($s);
      return Unit_instance;
    };
  }
  function EmptyState$lambda$lambda$lambda($busy, $onSuggestion, $s) {
    return function ($this$Button) {
      $this$Button.n22(['suggestion']);
      var tmp;
      if ($busy) {
        $this$Button.p22('disabled', 'disabled');
        tmp = Unit_instance;
      }
      $this$Button.s22(EmptyState$lambda$lambda$lambda$lambda($onSuggestion, $s));
      return Unit_instance;
    };
  }
  function EmptyState$lambda$lambda$lambda$lambda_0($this$Span) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Span.n22(['sug-icon']);
    return Unit_instance;
  }
  function EmptyState$lambda$lambda$lambda$lambda_1($s) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-135701046, $changed, -1, 'EmptyState.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (taskpane.kt:196)');
      }
      Text($s.k29_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function EmptyState$lambda$lambda$lambda$lambda_2($this$Span) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Span.n22(['sug-label']);
    return Unit_instance;
  }
  function EmptyState$lambda$lambda$lambda$lambda_3($s) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-718578623, $changed, -1, 'EmptyState.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (taskpane.kt:197)');
      }
      Text($s.l29_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function EmptyState$lambda$lambda$lambda_0($s) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-666310164, $changed, -1, 'EmptyState.<anonymous>.<anonymous>.<anonymous>.<anonymous> (taskpane.kt:196)');
      }
      $composer_0.l18(945274487);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.j1a();
      var tmp;
      if (false || it === Companion_getInstance().d13_1) {
        // Inline function 'EmptyState.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = EmptyState$lambda$lambda$lambda$lambda_0;
        $composer_0.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.n18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'EmptyState.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-135701046, true, EmptyState$lambda$lambda$lambda$lambda_1($s), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.vz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.j1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().d13_1) {
        // Inline function 'EmptyState.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_21(dispatchReceiver);
        $composer_1.k1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Span(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.l18(945276664);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.j1a();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().d13_1) {
        // Inline function 'EmptyState.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = EmptyState$lambda$lambda$lambda$lambda_2;
        $composer_0.k1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.n18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'EmptyState.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(-718578623, true, EmptyState$lambda$lambda$lambda$lambda_3($s), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.vz(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.j1a();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().d13_1) {
        // Inline function 'EmptyState.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_22(dispatchReceiver_0);
        $composer_2.k1a(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Span(tmp1_group, tmp0_0, $composer_0, 54, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function EmptyState$lambda$lambda_2($busy, $onSuggestion) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1903135804, $changed, -1, 'EmptyState.<anonymous>.<anonymous> (taskpane.kt:190)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = get_SUGGESTIONS().f();
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        // Inline function 'EmptyState.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        $composer_0.l18(659336681);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(!!($composer_0.f19($busy) | $composer_0.vz($onSuggestion)) | $composer_0.vz(element));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.j1a();
        var tmp;
        if (invalid || it === Companion_getInstance().d13_1) {
          // Inline function 'EmptyState.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = EmptyState$lambda$lambda$lambda($busy, $onSuggestion, element);
          $composer_0.k1a(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.n18();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'EmptyState.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-666310164, true, EmptyState$lambda$lambda$lambda_0(element), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.vz(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.j1a();
        var tmp_1;
        if (invalid_0 || it_0 === Companion_getInstance().d13_1) {
          // Inline function 'EmptyState.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_23(dispatchReceiver);
          $composer_1.k1a(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Button(tmp0_group, tmp0, $composer_0, 48, 0);
      }
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function EmptyState$lambda_0($busy, $onSuggestion) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(458857861, $changed, -1, 'EmptyState.<anonymous> (taskpane.kt:185)');
      }
      $composer_0.l18(-282837795);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.j1a();
      var tmp;
      if (false || it === Companion_getInstance().d13_1) {
        // Inline function 'EmptyState.<anonymous>.<anonymous>.<anonymous>' call
        var value = EmptyState$lambda$lambda;
        $composer_0.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.n18();
      Div(tmp0_group, ComposableSingletons$TaskpaneKt_getInstance().y29_1, $composer_0, 54, 0);
      $composer_0.l18(-282835205);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.j1a();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().d13_1) {
        // Inline function 'EmptyState.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = EmptyState$lambda$lambda_0;
        $composer_0.k1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.n18();
      Div(tmp1_group, ComposableSingletons$TaskpaneKt_getInstance().z29_1, $composer_0, 54, 0);
      $composer_0.l18(-282829475);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.j1a();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().d13_1) {
        // Inline function 'EmptyState.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = EmptyState$lambda$lambda_1;
        $composer_0.k1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.n18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'EmptyState.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1903135804, true, EmptyState$lambda$lambda_2($busy, $onSuggestion), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.vz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_1.j1a();
      var tmp_5;
      if (invalid || it_2 === Companion_getInstance().d13_1) {
        // Inline function 'EmptyState.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_24(dispatchReceiver);
        $composer_1.k1a(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp2_group, tmp0, $composer_0, 54, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function EmptyState$lambda_1($busy, $onSuggestion, $$changed) {
    return function ($composer, $force) {
      EmptyState($busy, $onSuggestion, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Composer$lambda($this$Div) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Div.n22(['composer']);
    return Unit_instance;
  }
  function Composer$lambda$lambda($this$Div) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Div.n22(['composer-box']);
    return Unit_instance;
  }
  function Composer$lambda$lambda$lambda$lambda($onInputChange) {
    return function (evt) {
      $onInputChange(evt.u26_1);
      return Unit_instance;
    };
  }
  function Composer$lambda$lambda$lambda$lambda_0($onSend) {
    return function (evt) {
      var tmp;
      if (evt.r27_1 === 'Enter' && !evt.w27_1) {
        evt.h26();
        tmp = $onSend();
      }
      return Unit_instance;
    };
  }
  function Composer$lambda$lambda$lambda($onInputChange, $onSend) {
    return function ($this$TextArea) {
      $this$TextArea.o22('prompt');
      $this$TextArea.p22('rows', '2');
      $this$TextArea.p22('placeholder', 'e.g. Build a monthly budget tracker with categories, amounts, and a total.');
      $this$TextArea.s24(Composer$lambda$lambda$lambda$lambda($onInputChange));
      $this$TextArea.t22(Composer$lambda$lambda$lambda$lambda_0($onSend));
      return Unit_instance;
    };
  }
  function Composer$lambda$lambda$lambda_0($this$Div) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Div.n22(['composer-row']);
    return Unit_instance;
  }
  function Composer$lambda$lambda$lambda$lambda_1($this$Span) {
    _init_properties_taskpane_kt__iia0b7();
    $this$Span.n22(['hint']);
    return Unit_instance;
  }
  function Composer$lambda$lambda$lambda$lambda$lambda($onSend) {
    return function (it) {
      $onSend();
      return Unit_instance;
    };
  }
  function Composer$lambda$lambda$lambda$lambda_2($busy, $onSend) {
    return function ($this$Button) {
      $this$Button.n22(['send-btn']);
      $this$Button.o22('send');
      var tmp;
      if ($busy) {
        $this$Button.p22('disabled', 'disabled');
        tmp = Unit_instance;
      }
      $this$Button.s22(Composer$lambda$lambda$lambda$lambda$lambda($onSend));
      return Unit_instance;
    };
  }
  function Composer$lambda$lambda$lambda_1($busy, $onSend) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(492290600, $changed, -1, 'Composer.<anonymous>.<anonymous>.<anonymous> (taskpane.kt:229)');
      }
      $composer_0.l18(-1653688816);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.j1a();
      var tmp;
      if (false || it === Companion_getInstance().d13_1) {
        // Inline function 'Composer.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = Composer$lambda$lambda$lambda$lambda_1;
        $composer_0.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.n18();
      Span(tmp0_group, ComposableSingletons$TaskpaneKt_getInstance().a2a_1, $composer_0, 54, 0);
      $composer_0.l18(-1653685573);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.f19($busy) | $composer_0.vz($onSend));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.j1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().d13_1) {
        // Inline function 'Composer.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = Composer$lambda$lambda$lambda$lambda_2($busy, $onSend);
        $composer_0.k1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.n18();
      Button(tmp1_group, ComposableSingletons$TaskpaneKt_getInstance().b2a_1, $composer_0, 48, 0);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function Composer$lambda$lambda_0($input, $onInputChange, $onSend, $busy) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1645701447, $changed, -1, 'Composer.<anonymous>.<anonymous> (taskpane.kt:213)');
      }
      $composer_0.l18(605116574);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.vz($onInputChange) | $composer_0.vz($onSend));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.j1a();
      var tmp;
      if (invalid || it === Companion_getInstance().d13_1) {
        // Inline function 'Composer.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = Composer$lambda$lambda$lambda($onInputChange, $onSend);
        $composer_0.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.n18();
      TextArea($input, tmp0_group, $composer_0, 0, 0);
      $composer_0.l18(605133465);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.j1a();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().d13_1) {
        // Inline function 'Composer.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = Composer$lambda$lambda$lambda_0;
        $composer_0.k1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.n18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'Composer.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(492290600, true, Composer$lambda$lambda$lambda_1($busy, $onSend), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.vz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.j1a();
      var tmp_3;
      if (invalid_0 || it_1 === Companion_getInstance().d13_1) {
        // Inline function 'Composer.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_26(dispatchReceiver);
        $composer_1.k1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp1_group, tmp0, $composer_0, 54, 0);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function Composer$lambda_0($input, $onInputChange, $onSend, $busy) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-762370522, $changed, -1, 'Composer.<anonymous> (taskpane.kt:212)');
      }
      $composer_0.l18(629403066);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.j1a();
      var tmp;
      if (false || it === Companion_getInstance().d13_1) {
        // Inline function 'Composer.<anonymous>.<anonymous>.<anonymous>' call
        var value = Composer$lambda$lambda;
        $composer_0.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.n18();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'Composer.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1645701447, true, Composer$lambda$lambda_0($input, $onInputChange, $onSend, $busy), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.vz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.j1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().d13_1) {
        // Inline function 'Composer.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_27(dispatchReceiver);
        $composer_1.k1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m20(p0, p1, p2);
    };
  }
  function Composer$lambda_1($input, $busy, $onInputChange, $onSend, $$changed) {
    return function ($composer, $force) {
      Composer($input, $busy, $onInputChange, $onSend, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function applyActions$lambda($actions) {
    return function (context) {
      var sheet = context.workbook.worksheets.getActiveWorksheet();
      var tmp0_iterator = $actions.f();
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        $l$block: {
          // Inline function 'applyActions.<anonymous>.<anonymous>' call
          var tmp = element.cell;
          var tmp0_elvis_lhs = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : null;
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var cell = tmp_0;
          var range = sheet.getRange(cell);
          var value = element.value;
          var tmp_1;
          if (!(value == null) ? typeof value === 'string' : false) {
            tmp_1 = value.trim().startsWith('=');
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            // Inline function 'kotlin.arrayOf' call
            // Inline function 'kotlin.arrayOf' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            range.formulas = [[value]];
          } else {
            // Inline function 'kotlin.arrayOf' call
            // Inline function 'kotlin.arrayOf' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            range.values = [[value]];
          }
        }
      }
      sheet.getUsedRange().format.autofitColumns();
      return context.sync();
    };
  }
  function App$sendTurn$slambda($prompt, $thinkingId, $sessionId$delegate, $messages$delegate, $nextId$delegate, $busy$delegate, resultContinuation) {
    this.t2a_1 = $prompt;
    this.u2a_1 = $thinkingId;
    this.v2a_1 = $sessionId$delegate;
    this.w2a_1 = $messages$delegate;
    this.x2a_1 = $nextId$delegate;
    this.y2a_1 = $busy$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(App$sendTurn$slambda).n1h = function ($this$launch, $completion) {
    var tmp = this.o1h($this$launch, $completion);
    tmp.t7_1 = Unit_instance;
    tmp.u7_1 = null;
    return tmp.z7();
  };
  protoOf(App$sendTurn$slambda).n8 = function (p1, $completion) {
    return this.n1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(App$sendTurn$slambda).z7 = function () {
    var suspendResult = this.t7_1;
    $sm: do
      try {
        var tmp = this.r7_1;
        switch (tmp) {
          case 0:
            this.s7_1 = 10;
            this.r7_1 = 1;
            continue $sm;
          case 1:
            this.s7_1 = 9;
            this.s7_1 = 8;
            this.b2b_1 = {};
            this.b2b_1.sessionId = App$lambda(this.v2a_1);
            this.b2b_1.prompt = this.t2a_1;
            this.c2b_1 = {};
            this.c2b_1.method = 'POST';
            this.c2b_1.headers = {'Content-Type': 'application/json'};
            this.c2b_1.body = JSON.stringify(this.b2b_1);
            this.r7_1 = 2;
            var this_0 = window.fetch('https://localhost:3000/api/generate', this.c2b_1);
            suspendResult = await_0(this_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.d2b_1 = suspendResult;
            if (this.d2b_1.ok != true) {
              this.r7_1 = 7;
              var this_1 = this.d2b_1.json();
              suspendResult = await_0(this_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.r7_1 = 3;
              continue $sm;
            }

          case 3:
            this.r7_1 = 4;
            var this_2 = this.d2b_1.json();
            suspendResult = await_0(this_2, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.e2b_1 = suspendResult;
            this.f2b_1 = this.e2b_1.actions;
            var tmp_0 = this;
            var tmp_1;
            var tmp_2 = Array.isArray(this.f2b_1);
            if ((!(tmp_2 == null) ? typeof tmp_2 === 'boolean' : false) ? tmp_2 : THROW_CCE()) {
              var tmp_3 = this.f2b_1.length;
              var this_3 = until(0, (!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE());
              var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_3, 10));
              var inductionVariable = this_3.w_1;
              var last = this_3.x_1;
              if (inductionVariable <= last)
                do {
                  var item = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var i = item;
                  destination.d(this.f2b_1[i]);
                }
                 while (!(item === last));
              tmp_1 = destination;
            } else {
              tmp_1 = emptyList();
            }

            tmp_0.g2b_1 = tmp_1;
            var tmp_4 = this;
            var tmp_5 = this.e2b_1.explanation;
            var tmp2_safe_receiver = (!(tmp_5 == null) ? typeof tmp_5 === 'string' : false) ? tmp_5 : null;
            var tmp_6;
            if (tmp2_safe_receiver == null) {
              tmp_6 = null;
            } else {
              var tmp_7;
              if (charSequenceLength(tmp2_safe_receiver) > 0) {
                tmp_7 = tmp2_safe_receiver;
              } else {
                tmp_7 = null;
              }
              tmp_6 = tmp_7;
            }

            var tmp3_elvis_lhs = tmp_6;
            tmp_4.h2b_1 = tmp3_elvis_lhs == null ? 'Done.' : tmp3_elvis_lhs;
            if (!this.g2b_1.p()) {
              this.r7_1 = 5;
              suspendResult = applyActions(this.g2b_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.r7_1 = 6;
              continue $sm;
            }

          case 5:
            this.r7_1 = 6;
            continue $sm;
          case 6:
            App$removeMsg(this.w2a_1, this.u2a_1);
            this.a2b_1 = App$addMsg(this.x2a_1, this.w2a_1, this.h2b_1, MsgKind_Assistant_getInstance(), this.g2b_1.i());
            this.s7_1 = 10;
            this.r7_1 = 11;
            continue $sm;
          case 7:
            var err = suspendResult;
            var tmp_8 = err.error;
            var tmp0_safe_receiver = (!(tmp_8 == null) ? typeof tmp_8 === 'string' : false) ? tmp_8 : null;
            var tmp_9;
            if (tmp0_safe_receiver == null) {
              tmp_9 = null;
            } else {
              var tmp_10;
              if (charSequenceLength(tmp0_safe_receiver) > 0) {
                tmp_10 = tmp0_safe_receiver;
              } else {
                tmp_10 = null;
              }
              tmp_9 = tmp_10;
            }

            var tmp1_elvis_lhs = tmp_9;
            throw Exception_init_$Create$(tmp1_elvis_lhs == null ? 'Request failed (' + this.d2b_1.status + ').' : tmp1_elvis_lhs);
          case 8:
            this.s7_1 = 9;
            var tmp_11 = this.u7_1;
            if (tmp_11 instanceof Error) {
              var e = this.u7_1;
              var tmp_12 = this;
              App$removeMsg(this.w2a_1, this.u2a_1);
              var tmp4_elvis_lhs = e.message;
              tmp_12.a2b_1 = App$addMsg(this.x2a_1, this.w2a_1, tmp4_elvis_lhs == null ? 'Something went wrong.' : tmp4_elvis_lhs, MsgKind_Error_getInstance());
              this.s7_1 = 10;
              this.r7_1 = 11;
              continue $sm;
            } else {
              throw this.u7_1;
            }

          case 9:
            this.s7_1 = 10;
            var t = this.u7_1;
            App$lambda_6(this.y2a_1, false);
            throw t;
          case 10:
            throw this.u7_1;
          case 11:
            this.a2b_1;
            this.s7_1 = 10;
            App$lambda_6(this.y2a_1, false);
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.s7_1 === 10) {
          throw e_0;
        } else {
          this.r7_1 = this.s7_1;
          this.u7_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(App$sendTurn$slambda).o1h = function ($this$launch, completion) {
    var i = new App$sendTurn$slambda(this.t2a_1, this.u2a_1, this.v2a_1, this.w2a_1, this.x2a_1, this.y2a_1, completion);
    i.z2a_1 = $this$launch;
    return i;
  };
  function App$sendTurn$slambda_0($prompt, $thinkingId, $sessionId$delegate, $messages$delegate, $nextId$delegate, $busy$delegate, resultContinuation) {
    var i = new App$sendTurn$slambda($prompt, $thinkingId, $sessionId$delegate, $messages$delegate, $nextId$delegate, $busy$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.n1h($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MsgKind_User_getInstance() {
    MsgKind_initEntries();
    return MsgKind_User_instance;
  }
  function MsgKind_Assistant_getInstance() {
    MsgKind_initEntries();
    return MsgKind_Assistant_instance;
  }
  function MsgKind_Error_getInstance() {
    MsgKind_initEntries();
    return MsgKind_Error_instance;
  }
  function MsgKind_Thinking_getInstance() {
    MsgKind_initEntries();
    return MsgKind_Thinking_instance;
  }
  var properties_initialized_taskpane_kt_velzu7;
  function _init_properties_taskpane_kt__iia0b7() {
    if (!properties_initialized_taskpane_kt_velzu7) {
      properties_initialized_taskpane_kt_velzu7 = true;
      SUGGESTIONS = listOf([new SuggestionItem('\uD83D\uDCB0', 'Monthly budget tracker', 'Build a monthly budget tracker with categories, amounts, and a total.'), new SuggestionItem('\uD83D\uDCC8', 'Sales pipeline', 'Create a sales pipeline with deal name, stage, value, and close date.'), new SuggestionItem('\u2705', 'Habit tracker', 'Make a weekly habit tracker with checkboxes for each day.')]);
      ChatMessage$stable = 0;
    }
  }
  function mainWrapper() {
    main();
  }
  //region block: init
  Colors$stable = 0;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=excel-ai-adk.js.map
