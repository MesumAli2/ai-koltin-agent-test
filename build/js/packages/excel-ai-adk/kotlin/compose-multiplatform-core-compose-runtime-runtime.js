(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-collection-collection.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    globalThis['compose-multiplatform-core-compose-runtime-runtime'] = factory(typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-collection-collection']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_collection_internal_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.z4;
  var initMetadataForInterface = kotlin_kotlin.$_$.o4;
  var Unit_instance = kotlin_kotlin.$_$.u1;
  var initMetadataForClass = kotlin_kotlin.$_$.l4;
  var VOID = kotlin_kotlin.$_$.c;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var THROW_CCE = kotlin_kotlin.$_$.x5;
  var Companion_instance = kotlin_kotlin.$_$.t1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m1;
  var createFailure = kotlin_kotlin.$_$.d6;
  var intercepted = kotlin_kotlin.$_$.j3;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var get = kotlin_kotlin.$_$.s3;
  var fold = kotlin_kotlin.$_$.r3;
  var minusKey = kotlin_kotlin.$_$.t3;
  var plus = kotlin_kotlin.$_$.v3;
  var toString = kotlin_kotlin.$_$.b5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a1;
  var isInterface = kotlin_kotlin.$_$.u4;
  var equals = kotlin_kotlin.$_$.f4;
  var hashCode = kotlin_kotlin.$_$.k4;
  var rotateLeft = kotlin_kotlin.$_$.i6;
  var Enum = kotlin_kotlin.$_$.q5;
  var rotateRight = kotlin_kotlin.$_$.j6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var fill = kotlin_kotlin.$_$.n2;
  var MutableIntIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.a;
  var emptyList = kotlin_kotlin.$_$.m2;
  var Long = kotlin_kotlin.$_$.u5;
  var sortWith = kotlin_kotlin.$_$.d3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var to = kotlin_kotlin.$_$.m6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.m4;
  var IllegalStateException = kotlin_kotlin.$_$.t5;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.z;
  var captureStack = kotlin_kotlin.$_$.b4;
  var defineProp = kotlin_kotlin.$_$.e4;
  var MutableIntObjectMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.c;
  var lazy = kotlin_kotlin.$_$.f6;
  var mutableScatterSetOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.k;
  var MutableScatterSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.h;
  var mutableListOf = kotlin_kotlin.$_$.v2;
  var KtMutableList = kotlin_kotlin.$_$.b2;
  var MutableScatterMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.g;
  var compareTo = kotlin_kotlin.$_$.d4;
  var FunctionAdapter = kotlin_kotlin.$_$.z3;
  var Comparator = kotlin_kotlin.$_$.p5;
  var KProperty1 = kotlin_kotlin.$_$.h5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.i4;
  var MutableIntList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.b;
  var isArray = kotlin_kotlin.$_$.s4;
  var KtSet = kotlin_kotlin.$_$.c2;
  var mutableScatterSetOf_0 = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.l;
  var KtMap = kotlin_kotlin.$_$.a2;
  var Exception = kotlin_kotlin.$_$.s5;
  var plus_0 = kotlin_kotlin.$_$.x2;
  var initMetadataForObject = kotlin_kotlin.$_$.q4;
  var fillArrayVal = kotlin_kotlin.$_$.g4;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.y;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var toString_0 = kotlin_kotlin.$_$.l6;
  var Element = kotlin_kotlin.$_$.u3;
  var getStringHashCode = kotlin_kotlin.$_$.j4;
  var MutableObjectIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.e;
  var ScatterSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.i;
  var fill_0 = kotlin_kotlin.$_$.p2;
  var CoroutineImpl = kotlin_kotlin.$_$.w3;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h3;
  var initMetadataForLambda = kotlin_kotlin.$_$.p4;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.i;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.j;
  var addAll = kotlin_kotlin.$_$.e2;
  var toList = kotlin_kotlin.$_$.f3;
  var flatten = kotlin_kotlin.$_$.r2;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.r;
  var CancellationException = kotlin_kotlin.$_$.g3;
  var addSuppressed = kotlin_kotlin.$_$.a6;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var returnIfSuspended = kotlin_kotlin.$_$.e;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.n4;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var removeFirst = kotlin_kotlin.$_$.b3;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var arrayCopy = kotlin_kotlin.$_$.f2;
  var MutableObjectList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.f;
  var anyToString = kotlin_kotlin.$_$.a4;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.u;
  var MutableIntSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.d;
  var first = kotlin_kotlin.$_$.q2;
  var last = kotlin_kotlin.$_$.s2;
  var copyOf = kotlin_kotlin.$_$.k2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.t;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var plus_1 = kotlin_kotlin.$_$.z2;
  var coerceAtMost = kotlin_kotlin.$_$.d5;
  var coerceAtLeast = kotlin_kotlin.$_$.c5;
  var copyOf_0 = kotlin_kotlin.$_$.j2;
  var ensureNotNull = kotlin_kotlin.$_$.e6;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var SequenceScope = kotlin_kotlin.$_$.i5;
  var numberRangeToNumber = kotlin_kotlin.$_$.x4;
  var until = kotlin_kotlin.$_$.f5;
  var iterator = kotlin_kotlin.$_$.j5;
  var Collection = kotlin_kotlin.$_$.y1;
  var mutableScatterMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.j;
  var mutableSetOf = kotlin_kotlin.$_$.w2;
  var AbstractMap = kotlin_kotlin.$_$.v1;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var Entry = kotlin_kotlin.$_$.z1;
  var AbstractSet = kotlin_kotlin.$_$.w1;
  var objectCreate = kotlin_kotlin.$_$.y4;
  var step = kotlin_kotlin.$_$.e5;
  var countOneBits = kotlin_kotlin.$_$.b6;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var toString_1 = kotlin_kotlin.$_$.l5;
  var longArray = kotlin_kotlin.$_$.w4;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.l;
  var Char = kotlin_kotlin.$_$.o5;
  var isCharSequence = kotlin_kotlin.$_$.t4;
  var minus = kotlin_kotlin.$_$.u2;
  var contains = kotlin_kotlin.$_$.i2;
  var plus_2 = kotlin_kotlin.$_$.y2;
  var primitiveArrayConcat = kotlin_kotlin.$_$.b;
  var singleOrNull = kotlin_kotlin.$_$.c3;
  var intArrayIterator = kotlin_kotlin.$_$.r4;
  var toIntArray = kotlin_kotlin.$_$.e3;
  var sequence = kotlin_kotlin.$_$.k5;
  var countTrailingZeroBits = kotlin_kotlin.$_$.c6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.h2;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var println = kotlin_kotlin.$_$.y3;
  var printStackTrace = kotlin_kotlin.$_$.h6;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.d;
  var toDuration = kotlin_kotlin.$_$.n5;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.k1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.s;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.o;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  initMetadataForInterface(Applier, 'Applier');
  initMetadataForClass(OffsetApplier, 'OffsetApplier', VOID, VOID, [Applier]);
  initMetadataForClass(AbstractApplier, 'AbstractApplier', VOID, VOID, [Applier]);
  initMetadataForClass(FrameAwaiter, 'FrameAwaiter');
  function get_key() {
    return Key_instance_0;
  }
  initMetadataForInterface(MonotonicFrameClock, 'MonotonicFrameClock', VOID, VOID, [Element], [1]);
  initMetadataForClass(BroadcastFrameClock, 'BroadcastFrameClock', BroadcastFrameClock, VOID, [MonotonicFrameClock], [1]);
  initMetadataForInterface(ComposeNodeLifecycleCallback, 'ComposeNodeLifecycleCallback');
  initMetadataForClass(Invalidation, 'Invalidation');
  initMetadataForInterface(RememberObserver, 'RememberObserver');
  initMetadataForInterface(ReusableRememberObserver, 'ReusableRememberObserver', VOID, VOID, [RememberObserver]);
  initMetadataForClass(CompositionContextHolder, 'CompositionContextHolder', VOID, VOID, [ReusableRememberObserver]);
  initMetadataForClass(ComposerImpl$derivedStateObserver$1);
  function changed(value) {
    return this.f19(value);
  }
  function changedInstance(value) {
    return this.vz(value);
  }
  initMetadataForInterface(Composer, 'Composer');
  initMetadataForClass(ComposerImpl, 'ComposerImpl', VOID, VOID, [Composer]);
  initMetadataForClass(Composer$Companion$Empty$1);
  initMetadataForCompanion(Companion);
  initMetadataForClass(InvalidationResult, 'InvalidationResult', VOID, Enum);
  initMetadataForClass(MovableContentStateReference, 'MovableContentStateReference');
  initMetadataForClass(MovableContentState, 'MovableContentState');
  initMetadataForClass(MovableContent, 'MovableContent');
  initMetadataForClass(ComposeRuntimeError, 'ComposeRuntimeError', VOID, IllegalStateException);
  initMetadataForClass(RememberObserverHolder, 'RememberObserverHolder');
  initMetadataForClass(Pending, 'Pending');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(GroupInfo, 'GroupInfo');
  initMetadataForClass(MutableScatterMultiMap, 'MutableScatterMultiMap');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(RememberEventDispatcher, 'RememberEventDispatcher');
  initMetadataForInterface(RecomposeScopeOwner, 'RecomposeScopeOwner');
  initMetadataForClass(CompositionImpl, 'CompositionImpl', VOID, VOID, [RecomposeScopeOwner]);
  initMetadataForClass(CompositionObserverHolder, 'CompositionObserverHolder', CompositionObserverHolder);
  initMetadataForObject(ComposableSingletons$CompositionKt, 'ComposableSingletons$CompositionKt');
  initMetadataForObject(ScopeInvalidated, 'ScopeInvalidated');
  initMetadataForClass(CompositionImplServiceKey$1);
  initMetadataForClass(CompositionContext, 'CompositionContext');
  initMetadataForClass(CompositionLocal, 'CompositionLocal');
  initMetadataForClass(ProvidableCompositionLocal, 'ProvidableCompositionLocal', VOID, CompositionLocal);
  initMetadataForClass(StaticProvidableCompositionLocal, 'StaticProvidableCompositionLocal', VOID, ProvidableCompositionLocal);
  initMetadataForInterface(PersistentCompositionLocalMap, 'PersistentCompositionLocalMap', VOID, VOID, [KtMap]);
  initMetadataForInterface(DerivedState, 'DerivedState');
  initMetadataForClass(DisposableEffectScope, 'DisposableEffectScope', DisposableEffectScope);
  initMetadataForClass(CompositionScopedCoroutineScopeCanceller, 'CompositionScopedCoroutineScopeCanceller', VOID, VOID, [RememberObserver]);
  initMetadataForClass(LaunchedEffectImpl, 'LaunchedEffectImpl', VOID, VOID, [RememberObserver]);
  initMetadataForClass(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', VOID, CancellationException);
  initMetadataForClass(LeftCompositionCancellationException, 'LeftCompositionCancellationException', LeftCompositionCancellationException, PlatformOptimizedCancellationException);
  initMetadataForClass(DisposableEffectImpl, 'DisposableEffectImpl', VOID, VOID, [RememberObserver]);
  initMetadataForClass(JoinedKey, 'JoinedKey');
  initMetadataForObject(Key, 'Key');
  initMetadataForClass(OpaqueKey, 'OpaqueKey');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(RecomposeScopeImpl, 'RecomposeScopeImpl');
  initMetadataForLambda(Recomposer$recompositionRunner$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(State, 'State', VOID, Enum);
  initMetadataForClass(RecomposerInfoImpl, 'RecomposerInfoImpl');
  initMetadataForClass(RecomposerErrorState, 'RecomposerErrorState');
  initMetadataForCompanion(Companion_2);
  initMetadataForLambda(Recomposer$runRecomposeAndApplyChanges$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(Recomposer$recompositionRunner$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($awaitWorkAvailableCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(Recomposer, 'Recomposer', VOID, CompositionContext, VOID, [0, 1, 2]);
  initMetadataForClass(SlotTable, 'SlotTable', SlotTable);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SlotWriter, 'SlotWriter');
  initMetadataForClass(Anchor, 'Anchor');
  initMetadataForClass(GroupSourceInformation, 'GroupSourceInformation');
  initMetadataForClass(SlotReader, 'SlotReader');
  initMetadataForClass(GroupIterator, 'GroupIterator');
  initMetadataForClass(SlotTableGroup, 'SlotTableGroup');
  initMetadataForClass(PrioritySet, 'PrioritySet', PrioritySet);
  initMetadataForClass(KeyInfo, 'KeyInfo');
  initMetadataForClass(SourceInformationGroupIterator, 'SourceInformationGroupIterator');
  initMetadataForClass(SourceInformationGroupPath, 'SourceInformationGroupPath');
  initMetadataForClass(AnchoredGroupPath, 'AnchoredGroupPath', VOID, SourceInformationGroupPath);
  initMetadataForClass(SourceInformationSlotTableGroup, 'SourceInformationSlotTableGroup');
  initMetadataForClass(RelativeGroupPath, 'RelativeGroupPath', VOID, SourceInformationGroupPath);
  function merge(previous, current, applied) {
    return null;
  }
  initMetadataForInterface(SnapshotMutationPolicy, 'SnapshotMutationPolicy');
  initMetadataForObject(StructuralEqualityPolicy, 'StructuralEqualityPolicy', VOID, VOID, [SnapshotMutationPolicy]);
  initMetadataForClass(StateRecord, 'StateRecord');
  initMetadataForClass(StateStateRecord, 'StateStateRecord', VOID, StateRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  initMetadataForInterface(StateObject, 'StateObject');
  initMetadataForClass(StateObjectImpl, 'StateObjectImpl', VOID, VOID, [StateObject]);
  initMetadataForClass(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', VOID, StateObjectImpl);
  initMetadataForClass(SnapshotThreadLocal, 'SnapshotThreadLocal', SnapshotThreadLocal);
  initMetadataForClass(IntStack, 'IntStack', IntStack);
  initMetadataForClass(Stack, 'Stack', Stack);
  initMetadataForClass(LazyValueHolder, 'LazyValueHolder');
  initMetadataForClass(OperationsDebugStringFormattable, 'OperationsDebugStringFormattable');
  initMetadataForClass(ChangeList, 'ChangeList', ChangeList, OperationsDebugStringFormattable);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(ComposerChangeListWriter, 'ComposerChangeListWriter');
  initMetadataForClass(FixupList, 'FixupList', FixupList, OperationsDebugStringFormattable);
  initMetadataForClass(Operation, 'Operation');
  initMetadataForObject(Ups, 'Ups', VOID, Operation);
  initMetadataForObject(Downs, 'Downs', VOID, Operation);
  initMetadataForObject(AdvanceSlotsBy, 'AdvanceSlotsBy', VOID, Operation);
  initMetadataForObject(Remember, 'Remember', VOID, Operation);
  initMetadataForObject(AppendValue, 'AppendValue', VOID, Operation);
  initMetadataForObject(TrimParentValues, 'TrimParentValues', VOID, Operation);
  initMetadataForObject(UpdateValue, 'UpdateValue', VOID, Operation);
  initMetadataForObject(UpdateAnchoredValue, 'UpdateAnchoredValue', VOID, Operation);
  initMetadataForObject(UpdateAuxData, 'UpdateAuxData', VOID, Operation);
  initMetadataForObject(EnsureRootGroupStarted, 'EnsureRootGroupStarted', VOID, Operation);
  initMetadataForObject(EnsureGroupStarted, 'EnsureGroupStarted', VOID, Operation);
  initMetadataForObject(RemoveCurrentGroup, 'RemoveCurrentGroup', VOID, Operation);
  initMetadataForObject(MoveCurrentGroup, 'MoveCurrentGroup', VOID, Operation);
  initMetadataForObject(EndCurrentGroup, 'EndCurrentGroup', VOID, Operation);
  initMetadataForObject(SkipToEndOfCurrentGroup, 'SkipToEndOfCurrentGroup', VOID, Operation);
  initMetadataForObject(EndCompositionScope, 'EndCompositionScope', VOID, Operation);
  initMetadataForObject(UseCurrentNode, 'UseCurrentNode', VOID, Operation);
  initMetadataForObject(UpdateNode, 'UpdateNode', VOID, Operation);
  initMetadataForObject(RemoveNode, 'RemoveNode', VOID, Operation);
  initMetadataForObject(MoveNode, 'MoveNode', VOID, Operation);
  initMetadataForObject(InsertSlots, 'InsertSlots', VOID, Operation);
  initMetadataForObject(InsertSlotsWithFixups, 'InsertSlotsWithFixups', VOID, Operation);
  initMetadataForObject(InsertNodeFixup, 'InsertNodeFixup', VOID, Operation);
  initMetadataForObject(PostInsertNodeFixup, 'PostInsertNodeFixup', VOID, Operation);
  initMetadataForObject(ResetSlots, 'ResetSlots', VOID, Operation);
  initMetadataForObject(DetermineMovableContentNodeIndex, 'DetermineMovableContentNodeIndex', VOID, Operation);
  initMetadataForObject(CopyNodesToNewAnchorLocation, 'CopyNodesToNewAnchorLocation', VOID, Operation);
  initMetadataForObject(CopySlotTableToAnchorLocation, 'CopySlotTableToAnchorLocation', VOID, Operation);
  initMetadataForObject(EndMovableContentPlacement, 'EndMovableContentPlacement', VOID, Operation);
  initMetadataForObject(ReleaseMovableGroupAtCurrent, 'ReleaseMovableGroupAtCurrent', VOID, Operation);
  initMetadataForObject(ApplyChangeList, 'ApplyChangeList', VOID, Operation);
  initMetadataForClass(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1, VOID, VOID, VOID, [RecomposeScopeOwner]);
  initMetadataForClass(OpIterator, 'OpIterator');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(Operations, 'Operations', Operations, OperationsDebugStringFormattable);
  initMetadataForClass(MutableVector, 'MutableVector');
  initMetadataForLambda(ScatterSetWrapper$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ScatterSetWrapper, 'ScatterSetWrapper', VOID, VOID, [KtSet]);
  initMetadataForClass(ScopeMap, 'ScopeMap', ScopeMap);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(PersistentHashMap, 'PersistentHashMap', VOID, AbstractMap, [AbstractMap, KtMap]);
  initMetadataForClass(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator');
  initMetadataForClass(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(TrieNodeBaseIterator, 'TrieNodeBaseIterator');
  initMetadataForClass(TrieNodeKeysIterator, 'TrieNodeKeysIterator', TrieNodeKeysIterator, TrieNodeBaseIterator);
  initMetadataForClass(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', TrieNodeEntriesIterator, TrieNodeBaseIterator);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(PersistentHashMapKeys, 'PersistentHashMapKeys', VOID, AbstractSet, [KtSet, Collection, AbstractSet]);
  initMetadataForClass(PersistentHashMapEntries, 'PersistentHashMapEntries', VOID, AbstractSet, [KtSet, Collection, AbstractSet]);
  initMetadataForClass(ModificationResult, 'ModificationResult');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(TrieNode, 'TrieNode');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(PersistentOrderedSet, 'PersistentOrderedSet', VOID, AbstractSet, [AbstractSet, KtSet, Collection]);
  initMetadataForClass(Links, 'Links', Links_init_$Create$);
  initMetadataForClass(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator');
  initMetadataForObject(EndOfChain, 'EndOfChain');
  initMetadataForClass(IntRef, 'IntRef', IntRef);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(PersistentCompositionLocalHashMap, 'PersistentCompositionLocalHashMap', VOID, PersistentHashMap, [PersistentHashMap, PersistentCompositionLocalMap]);
  initMetadataForClass(ThreadMap, 'ThreadMap');
  initMetadataForInterface(ObserverHandle, 'ObserverHandle');
  initMetadataForClass(sam$androidx_compose_runtime_snapshots_ObserverHandle$0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', VOID, VOID, [ObserverHandle, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', VOID, VOID, [ObserverHandle, FunctionAdapter]);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(Snapshot, 'Snapshot');
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(MutableSnapshot, 'MutableSnapshot', VOID, Snapshot);
  initMetadataForClass(SnapshotApplyResult, 'SnapshotApplyResult');
  initMetadataForObject(Success, 'Success', VOID, SnapshotApplyResult);
  initMetadataForClass(Failure, 'Failure', VOID, SnapshotApplyResult);
  initMetadataForClass(GlobalSnapshot, 'GlobalSnapshot', VOID, MutableSnapshot);
  initMetadataForClass(NestedMutableSnapshot, 'NestedMutableSnapshot', VOID, MutableSnapshot);
  initMetadataForClass(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', SnapshotDoubleIndexHeap);
  initMetadataForCompanion(Companion_12);
  initMetadataForLambda(SnapshotIdSet$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SnapshotIdSet, 'SnapshotIdSet');
  initMetadataForClass(SnapshotWeakSet, 'SnapshotWeakSet', SnapshotWeakSet);
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForClass(AtomicInt, 'AtomicInt');
  initMetadataForClass(ComposableLambdaImpl, 'ComposableLambdaImpl');
  initMetadataForCoroutine($withFrameNanosCOROUTINE$4, CoroutineImpl);
  initMetadataForClass(MonotonicClockImpl, 'MonotonicClockImpl', MonotonicClockImpl, VOID, [MonotonicFrameClock], [1]);
  initMetadataForObject(Trace, 'Trace');
  initMetadataForClass(IntMap, 'IntMap', IntMap);
  initMetadataForClass(WeakReference, 'WeakReference');
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.aw_1 = applier;
    this.bw_1 = offset;
    this.cw_1 = 0;
  }
  protoOf(OffsetApplier).rv = function () {
    return this.aw_1.rv();
  };
  protoOf(OffsetApplier).uv = function (node) {
    this.cw_1 = this.cw_1 + 1 | 0;
    this.aw_1.uv(node);
  };
  protoOf(OffsetApplier).vv = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.cw_1 > 0)) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      var tmp$ret$0 = 'OffsetApplier up called with no corresponding down';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.cw_1 = this.cw_1 - 1 | 0;
    this.aw_1.vv();
  };
  protoOf(OffsetApplier).wv = function (index, instance) {
    this.aw_1.wv(index + (this.cw_1 === 0 ? this.bw_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).xv = function (index, instance) {
    this.aw_1.xv(index + (this.cw_1 === 0 ? this.bw_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).yv = function (index, count) {
    this.aw_1.yv(index + (this.cw_1 === 0 ? this.bw_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).zv = function (from, to, count) {
    var effectiveOffset = this.cw_1 === 0 ? this.bw_1 : 0;
    this.aw_1.zv(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  function AbstractApplier(root) {
    this.dw_1 = root;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.ew_1 = ArrayList_init_$Create$();
    this.fw_1 = this.dw_1;
  }
  protoOf(AbstractApplier).gw = function (_set____db54di) {
    this.fw_1 = _set____db54di;
  };
  protoOf(AbstractApplier).rv = function () {
    return this.fw_1;
  };
  protoOf(AbstractApplier).hw = function (node) {
    this.ew_1.d(this.rv());
    this.gw(node);
  };
  protoOf(AbstractApplier).uv = function (node) {
    return this.hw((node == null ? true : !(node == null)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).vv = function () {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.ew_1.p()) {
      // Inline function 'androidx.compose.runtime.AbstractApplier.up.<anonymous>' call
      var tmp$ret$1 = 'empty stack';
      throwIllegalStateException(tmp$ret$1);
    }
    this.gw(this.ew_1.e1(this.ew_1.i() - 1 | 0));
  };
  function FrameAwaiter(onFrame, continuation) {
    this.iw_1 = onFrame;
    this.jw_1 = continuation;
  }
  protoOf(FrameAwaiter).kw = function (timeNanos) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      var value = this.iw_1(timeNanos);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp$ret$3 = tmp;
    this.jw_1.c8(tmp$ret$3);
  };
  function fail($this, cause) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.mw_1;
    if (!($this.nw_1 == null))
      return Unit_instance;
    $this.nw_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = $this.ow_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_1 = item.jw_1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        this_1.c8(tmp$ret$0);
      }
       while (inductionVariable <= last);
    $this.ow_1.b1();
    $this.qw_1.sw(0);
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.mw_1;
      this$0.ow_1.a1($awaiter);
      if (this$0.ow_1.p()) {
        this$0.qw_1.sw(0);
      }
      return Unit_instance;
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.lw_1 = onNewAwaiters;
    this.mw_1 = new Object();
    this.nw_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.ow_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.pw_1 = ArrayList_init_$Create$();
    this.qw_1 = new AtomicInt(0);
  }
  protoOf(BroadcastFrameClock).tw = function () {
    return !(this.qw_1.xi() === 0);
  };
  protoOf(BroadcastFrameClock).uw = function (timeNanos) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.mw_1;
    var toResume = this.ow_1;
    this.ow_1 = this.pw_1;
    this.pw_1 = toResume;
    this.qw_1.sw(0);
    var inductionVariable = 0;
    var last = toResume.i();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.o(i).kw(timeNanos);
      }
       while (inductionVariable < last);
    toResume.b1();
  };
  protoOf(BroadcastFrameClock).vw = function (onFrame, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.kh();
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = new FrameAwaiter(onFrame, cancellable);
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.mw_1;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.nw_1;
      if (!(cause == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.c8(tmp$ret$0);
        break $l$block;
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      var hadAwaiters = !this.ow_1.p();
      this.ow_1.d(awaiter);
      if (!hadAwaiters) {
        this.qw_1.sw(1);
      }
      var hasNewAwaiters = !hadAwaiters;
      cancellable.cg(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters && !(this.lw_1 == null)) {
        try {
          this.lw_1();
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            fail(this, t);
          } else {
            throw $p;
          }
        }
      }
    }
    return cancellable.of();
  };
  function invalidApplier() {
    var message = 'Invalid applier';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ComposeNodeLifecycleCallback() {
  }
  function get_compositionTracer() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionTracer;
  }
  var compositionTracer;
  function get_invocation() {
    _init_properties_Composer_kt__bmp4g0();
    return invocation;
  }
  var invocation;
  var provider;
  function get_compositionLocalMap() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  var providerValues;
  var providerMaps;
  function get_reference() {
    _init_properties_Composer_kt__bmp4g0();
    return reference;
  }
  var reference;
  function get_InvalidationLocationAscending() {
    _init_properties_Composer_kt__bmp4g0();
    return InvalidationLocationAscending;
  }
  var InvalidationLocationAscending;
  function Invalidation(scope, location, instances) {
    this.zw_1 = scope;
    this.ax_1 = location;
    this.bx_1 = instances;
  }
  protoOf(Invalidation).cx = function () {
    return this.zw_1.lx(this.bx_1);
  };
  function startRoot($this) {
    $this.xx_1 = 0;
    $this.ty_1 = $this.ox_1.pz();
    startGroup($this, 100);
    $this.nx_1.qz();
    $this.gy_1 = $this.nx_1.rz();
    $this.jy_1.uz(asInt($this.iy_1));
    $this.iy_1 = $this.vz($this.gy_1);
    $this.xy_1 = null;
    if (!$this.by_1) {
      $this.by_1 = $this.nx_1.wz();
    }
    if (!$this.oy_1) {
      $this.oy_1 = $this.nx_1.xz();
    }
    var tmp0_safe_receiver = read($this.gy_1, get_LocalInspectionTables());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.d($this.ox_1);
      $this.nx_1.yz(tmp0_safe_receiver);
    }
    startGroup($this, $this.nx_1.zz());
  }
  function endRoot($this) {
    endGroup($this);
    $this.nx_1.a10();
    endGroup($this);
    $this.zy_1.n10();
    finalizeCompose($this);
    $this.ty_1.d11();
    $this.cy_1 = false;
    $this.iy_1 = asBool($this.jy_1.e11());
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.tx_1.b1();
    $this.yx_1.b1();
    $this.fy_1.b1();
    $this.jy_1.b1();
    $this.hy_1 = null;
    $this.bz_1.b1();
    $this.dz_1 = 0;
    $this.my_1 = 0;
    $this.dy_1 = false;
    $this.cz_1 = false;
    $this.ky_1 = false;
    $this.ry_1 = false;
    $this.cy_1 = false;
    $this.ly_1 = -1;
    if (!$this.ty_1.u10_1) {
      $this.ty_1.d11();
    }
    if (!$this.vy_1.e12_1) {
      forceFreshInsertTable($this);
    }
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_0().g12_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_0().g12_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    $this.wx_1 = $this.wx_1 + $this.ty_1.j12() | 0;
  }
  function updateSlot($this, value) {
    $this.k12();
    $this.l12(value);
  }
  function rememberObserverAnchor($this) {
    var tmp;
    if ($this.cz_1) {
      var tmp_0;
      if (get_isAfterFirstChild($this.vy_1)) {
        var group = $this.vy_1.b12_1 - 1 | 0;
        var parent = $this.vy_1.m12(group);
        while (!(parent === $this.vy_1.d12_1) && parent >= 0) {
          group = parent;
          parent = $this.vy_1.m12(group);
        }
        tmp_0 = $this.vy_1.n12(group);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (get_isAfterFirstChild_0($this.ty_1)) {
        var group_0 = $this.ty_1.v10_1 - 1 | 0;
        var parent_0 = $this.ty_1.m12(group_0);
        while (!(parent_0 === $this.ty_1.x10_1) && parent_0 >= 0) {
          group_0 = parent_0;
          parent_0 = $this.ty_1.m12(group_0);
        }
        tmp_1 = $this.ty_1.n12(group_0);
      } else {
        tmp_1 = null;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.xy_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.ty_1.x10_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.cz_1 && $this.wy_1) {
      var current = $this.vy_1.d12_1;
      while (current > 0) {
        if ($this.vy_1.p12(current) === 202 && equals($this.vy_1.q12(current), get_compositionLocalMap())) {
          var tmp = $this.vy_1.o12(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
          $this.xy_1 = providers;
          return providers;
        }
        current = $this.vy_1.m12(current);
      }
    }
    if ($this.ty_1.i() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.ty_1.p12(current_0) === 202 && equals($this.ty_1.q12(current_0), get_compositionLocalMap())) {
          var tmp0_safe_receiver = $this.hy_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o(current_0);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            var tmp_1 = $this.ty_1.o12(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.xy_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.ty_1.m12(current_0);
      }
    }
    $this.xy_1 = $this.gy_1;
    return $this.gy_1;
  }
  function recordProviderUpdate($this, providers) {
    var tmp0_elvis_lhs = $this.hy_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordProviderUpdate.<anonymous>' call
      var newProviderUpdates = new IntMap();
      $this.hy_1 = newProviderUpdates;
      tmp = newProviderUpdates;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var providerUpdates = tmp;
    providerUpdates.s12($this.ty_1.v10_1, providers);
  }
  function ensureWriter($this) {
    if ($this.vy_1.e12_1) {
      $this.vy_1 = $this.uy_1.t12();
      $this.vy_1.u12();
      $this.wy_1 = false;
      $this.xy_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.vy_1.e12_1);
    forceFreshInsertTable($this);
  }
  function forceFreshInsertTable($this) {
    var tmp = $this;
    // Inline function 'kotlin.apply' call
    var this_0 = new SlotTable();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.forceFreshInsertTable.<anonymous>' call
    if ($this.oy_1) {
      this_0.v12();
    }
    if ($this.nx_1.x12()) {
      this_0.w12();
    }
    tmp.uy_1 = this_0;
    var tmp_0 = $this;
    // Inline function 'kotlin.also' call
    var this_1 = $this.uy_1.t12();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.forceFreshInsertTable.<anonymous>' call
    this_1.y12(true);
    tmp_0.vy_1 = this_1;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.ty_1.c13();
    } else {
      if (!(data == null) && !($this.ty_1.a13() === data)) {
        $this.zy_1.z12(data);
      }
      $this.ty_1.b13();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
    var rGroupIndex = $this.xx_1;
    if (objectKey == null)
      if (!(data == null) && key === 207 && !equals(data, Companion_getInstance().d13_1)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash = hashCode(data);
        var tmp = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = $this.dz_1;
        var this_1 = rotateLeft(this_0, 3) ^ keyHash;
        tmp.dz_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var tmp_0 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_2 = $this.dz_1;
        var this_3 = rotateLeft(this_2, 3) ^ key;
        tmp_0.dz_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
      }
     else {
      if (objectKey instanceof Enum) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_0 = objectKey.p1_1;
        var tmp_1 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_4 = $this.dz_1;
        var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
        tmp_1.dz_1 = rotateLeft(this_5, 3) ^ 0;
      } else {
        var keyHash_1 = hashCode(objectKey);
        var tmp_2 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_6 = $this.dz_1;
        var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
        tmp_2.dz_1 = rotateLeft(this_7, 3) ^ 0;
      }
    }
    if (objectKey == null) {
      $this.xx_1 = $this.xx_1 + 1 | 0;
    }
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    var isNode = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_0().g12_1));
    if ($this.cz_1) {
      $this.ty_1.e13();
      var startIndex = $this.vy_1.b12_1;
      if (isNode) {
        $this.vy_1.h13(key, Companion_getInstance().d13_1);
      } else if (!(data == null)) {
        var tmp_3 = $this.vy_1;
        tmp_3.g13(key, objectKey == null ? Companion_getInstance().d13_1 : objectKey, data);
      } else {
        var tmp_4 = $this.vy_1;
        tmp_4.f13(key, objectKey == null ? Companion_getInstance().d13_1 : objectKey);
      }
      var tmp4_safe_receiver = $this.ux_1;
      if (tmp4_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp4_safe_receiver.o13(insertKeyInfo, $this.vx_1 - tmp4_safe_receiver.j13_1 | 0);
        tmp4_safe_receiver.p13(insertKeyInfo);
      }
      enterGroup($this, isNode, null);
      return Unit_instance;
    }
    var tmp_5;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    if (!!(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_0().h12_1))) {
      tmp_5 = $this.ky_1;
    } else {
      tmp_5 = false;
    }
    var forceReplace = tmp_5;
    if ($this.ux_1 == null) {
      var slotKey = $this.ty_1.q13();
      if (!forceReplace && slotKey === key && equals(objectKey, $this.ty_1.s13())) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.ux_1 = new Pending($this.ty_1.r13(), $this.vx_1);
      }
    }
    var pending = $this.ux_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.t13(key, objectKey);
      if (!forceReplace && !(keyInfo == null)) {
        pending.p13(keyInfo);
        var location = keyInfo.x13_1;
        $this.vx_1 = pending.a14(keyInfo) + pending.j13_1 | 0;
        var relativePosition = pending.b14(keyInfo);
        var currentRelativePosition = relativePosition - pending.k13_1 | 0;
        pending.c14(relativePosition, pending.k13_1);
        $this.zy_1.d14(location);
        $this.ty_1.e14(location);
        if (currentRelativePosition > 0) {
          $this.zy_1.f14(currentRelativePosition);
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.ty_1.e13();
        $this.cz_1 = true;
        $this.xy_1 = null;
        ensureWriter($this);
        $this.vy_1.u13();
        var startIndex_0 = $this.vy_1.b12_1;
        if (isNode) {
          $this.vy_1.h13(key, Companion_getInstance().d13_1);
        } else if (!(data == null)) {
          var tmp_6 = $this.vy_1;
          tmp_6.g13(key, objectKey == null ? Companion_getInstance().d13_1 : objectKey, data);
        } else {
          var tmp_7 = $this.vy_1;
          tmp_7.f13(key, objectKey == null ? Companion_getInstance().d13_1 : objectKey);
        }
        $this.az_1 = $this.vy_1.n12(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.o13(insertKeyInfo_0, $this.vx_1 - pending.j13_1 | 0);
        pending.p13(insertKeyInfo_0);
        // Inline function 'kotlin.collections.mutableListOf' call
        var tmp$ret$12 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$12, isNode ? 0 : $this.vx_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.tx_1.g14($this.ux_1);
    $this.ux_1 = newPending;
    $this.yx_1.uz($this.wx_1);
    $this.yx_1.uz($this.xx_1);
    $this.yx_1.uz($this.vx_1);
    if (isNode)
      $this.vx_1 = 0;
    $this.wx_1 = 0;
    $this.xx_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.tx_1.e11();
    if (!(previousPending == null) && !inserting) {
      previousPending.k13_1 = previousPending.k13_1 + 1 | 0;
    }
    $this.ux_1 = previousPending;
    $this.vx_1 = $this.yx_1.e11() + expectedNodeCount | 0;
    $this.xx_1 = $this.yx_1.e11();
    $this.wx_1 = $this.yx_1.e11() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    var rGroupIndex = $this.yx_1.h14() - 1 | 0;
    if ($this.cz_1) {
      var parent = $this.vy_1.d12_1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      var groupKey = $this.vy_1.p12(parent);
      var dataKey = $this.vy_1.q12(parent);
      var data = $this.vy_1.o12(parent);
      if (dataKey == null)
        if (!(data == null) && groupKey === 207 && !equals(data, Companion_getInstance().d13_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_0 = hashCode(data);
          var tmp = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_0 = $this.dz_1 ^ rGroupIndex;
          var this_1 = rotateRight(this_0, 3) ^ groupKey_0;
          tmp.dz_1 = rotateRight(this_1, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_0 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_2 = $this.dz_1 ^ rGroupIndex;
          var this_3 = rotateRight(this_2, 3) ^ groupKey;
          tmp_0.dz_1 = rotateRight(this_3, 3);
        }
       else {
        if (dataKey instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_1 = dataKey.p1_1;
          var tmp_1 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_4 = $this.dz_1 ^ 0;
          var this_5 = rotateRight(this_4, 3) ^ groupKey_1;
          tmp_1.dz_1 = rotateRight(this_5, 3);
        } else {
          var groupKey_2 = hashCode(dataKey);
          var tmp_2 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_6 = $this.dz_1 ^ 0;
          var this_7 = rotateRight(this_6, 3) ^ groupKey_2;
          tmp_2.dz_1 = rotateRight(this_7, 3);
        }
      }
    } else {
      var parent_0 = $this.ty_1.x10_1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      var groupKey_3 = $this.ty_1.p12(parent_0);
      var dataKey_0 = $this.ty_1.q12(parent_0);
      var data_0 = $this.ty_1.o12(parent_0);
      if (dataKey_0 == null)
        if (!(data_0 == null) && groupKey_3 === 207 && !equals(data_0, Companion_getInstance().d13_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_4 = hashCode(data_0);
          var tmp_3 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_8 = $this.dz_1 ^ rGroupIndex;
          var this_9 = rotateRight(this_8, 3) ^ groupKey_4;
          tmp_3.dz_1 = rotateRight(this_9, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_4 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_10 = $this.dz_1 ^ rGroupIndex;
          var this_11 = rotateRight(this_10, 3) ^ groupKey_3;
          tmp_4.dz_1 = rotateRight(this_11, 3);
        }
       else {
        if (dataKey_0 instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_5 = dataKey_0.p1_1;
          var tmp_5 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_12 = $this.dz_1 ^ 0;
          var this_13 = rotateRight(this_12, 3) ^ groupKey_5;
          tmp_5.dz_1 = rotateRight(this_13, 3);
        } else {
          var groupKey_6 = hashCode(dataKey_0);
          var tmp_6 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_14 = $this.dz_1 ^ 0;
          var this_15 = rotateRight(this_14, 3) ^ groupKey_6;
          tmp_6.dz_1 = rotateRight(this_15, 3);
        }
      }
    }
    var expectedNodeCount = $this.wx_1;
    var pending = $this.ux_1;
    if (!(pending == null) && pending.i13_1.i() > 0) {
      var previous = pending.i13_1;
      var current = pending.i14();
      var usedKeys = fastToSet(current);
      // Inline function 'kotlin.collections.mutableSetOf' call
      var placedKeys = LinkedHashSet_init_$Create$();
      var currentIndex = 0;
      var currentEnd = current.i();
      var previousIndex = 0;
      var previousEnd = previous.i();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.o(previousIndex);
        if (!usedKeys.n(previousInfo)) {
          var deleteOffset = pending.a14(previousInfo);
          $this.zy_1.j14(deleteOffset + pending.j13_1 | 0, previousInfo.y13_1);
          pending.k14(previousInfo.x13_1, 0);
          $this.zy_1.d14(previousInfo.x13_1);
          $this.ty_1.e14(previousInfo.x13_1);
          recordDelete($this);
          $this.ty_1.j12();
          removeRange($this.ey_1, previousInfo.x13_1, previousInfo.x13_1 + $this.ty_1.l14(previousInfo.x13_1) | 0);
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.n(previousInfo)) {
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.o(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.a14(currentInfo);
            placedKeys.d(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.m14(currentInfo);
              $this.zy_1.n14(nodePosition + pending.j13_1 | 0, nodeOffset + pending.j13_1 | 0, updatedCount);
              pending.o14(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            previousIndex = previousIndex + 1 | 0;
          }
          currentIndex = currentIndex + 1 | 0;
          nodeOffset = nodeOffset + pending.m14(currentInfo) | 0;
        }
      }
      $this.zy_1.p14();
      if (previous.i() > 0) {
        $this.zy_1.d14($this.ty_1.q14());
        $this.ty_1.u12();
      }
    }
    var removeIndex = $this.vx_1;
    while (!$this.ty_1.r14()) {
      var startSlot = $this.ty_1.v10_1;
      recordDelete($this);
      var nodesToRemove = $this.ty_1.j12();
      $this.zy_1.j14(removeIndex, nodesToRemove);
      removeRange($this.ey_1, startSlot, $this.ty_1.v10_1);
    }
    var inserting = $this.cz_1;
    if (inserting) {
      if (isNode) {
        $this.bz_1.x14();
        expectedNodeCount = 1;
      }
      $this.ty_1.y14();
      var parentGroup = $this.vy_1.d12_1;
      $this.vy_1.z14();
      if (!$this.ty_1.c15()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.vy_1.a15();
        $this.vy_1.y12(true);
        recordInsert($this, $this.az_1);
        $this.cz_1 = false;
        if (!$this.ox_1.b15()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        $this.zy_1.s14();
      }
      var remainingSlots = $this.ty_1.t14();
      if (remainingSlots > 0) {
        $this.zy_1.u14(remainingSlots);
      }
      $this.zy_1.v14();
      var parentGroup_0 = $this.ty_1.x10_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.ty_1.w14();
      $this.zy_1.p14();
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.ry_1;
    $this.ry_1 = true;
    var recomposed = false;
    var parent = $this.ty_1.x10_1;
    var end = parent + $this.ty_1.l14(parent) | 0;
    var recomposeIndex = $this.vx_1;
    var recomposeCompoundKey = $this.dz_1;
    var oldGroupNodeCount = $this.wx_1;
    var oldRGroupIndex = $this.xx_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.ey_1, $this.ty_1.v10_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.ax_1;
      removeLocation($this.ey_1, location);
      if (firstInRange_0.cx()) {
        recomposed = true;
        $this.ty_1.e14(location);
        var newGroup = $this.ty_1.v10_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.vx_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.xx_1 = rGroupIndexOf($this, newGroup);
        var newParent = $this.ty_1.m12(newGroup);
        $this.dz_1 = compoundKeyOf($this, newParent, rGroupIndexOf($this, newParent), parent, recomposeCompoundKey);
        $this.xy_1 = null;
        firstInRange_0.zw_1.e15($this);
        $this.xy_1 = null;
        $this.ty_1.f15(parent);
      } else {
        $this.qy_1.g14(firstInRange_0.zw_1);
        firstInRange_0.zw_1.d15();
        $this.qy_1.e11();
      }
      firstInRange_0 = firstInRange($this.ey_1, $this.ty_1.v10_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.ty_1.u12();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.vx_1 = recomposeIndex + parentGroupNodes | 0;
      $this.wx_1 = oldGroupNodeCount + parentGroupNodes | 0;
      $this.xx_1 = oldRGroupIndex;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.dz_1 = recomposeCompoundKey;
    $this.ry_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.tx_1.i() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.tx_1.g15(pendingIndex);
            if (!(pending == null) && pending.k14(current, newCurrentNodes)) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.ty_1.x10_1;
        } else {
          if ($this.ty_1.h15(current))
            break $l$loop_0;
          current = $this.ty_1.m12(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.ty_1.m12(group);
    $l$loop: while (!(anchorGroup === recomposeGroup) && !$this.ty_1.h15(anchorGroup)) {
      anchorGroup = $this.ty_1.m12(anchorGroup);
    }
    var index = $this.ty_1.h15(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.ty_1.i15(group) | 0) | 0;
    loop: while (index < nodeIndexLimit && current !== groupLocation) {
      current = current + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.ty_1.l14(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + ($this.ty_1.h15(current) ? 1 : updatedNodeCount($this, current)) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function rGroupIndexOf($this, group) {
    var result = 0;
    var parent = $this.ty_1.m12(group);
    var child = parent + 1 | 0;
    while (child < group) {
      if (!$this.ty_1.j15(child)) {
        result = result + 1 | 0;
      }
      child = child + $this.ty_1.l14(child) | 0;
    }
    return result;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.ay_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp = tmp0_safe_receiver.cq(group) ? tmp0_safe_receiver.o(group) : 0;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.zx_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.ty_1.i15(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.ay_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = new MutableIntIntMap();
          $this.ay_1 = newCounts;
          tmp = newCounts;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        virtualCounts.bq(group, count);
      } else {
        var tmp1_elvis_lhs = $this.zx_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.ty_1.i());
          fill(newCounts_0, -1);
          $this.zx_1 = newCounts_0;
          tmp_0 = newCounts_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.zx_1 = null;
    $this.ay_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.ty_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 && !(current === nearestCommonRoot)) {
      if (reader.h15(current)) {
        $this.zy_1.s14();
      }
      current = reader.m12(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 && !(group === nearestCommonRoot)) {
      doRecordDownsFor($this, $this.ty_1.m12(group), nearestCommonRoot);
      if ($this.ty_1.h15(group)) {
        $this.zy_1.k15(nodeAt($this.ty_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, rGroupIndex, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.ty_1, $this, group);
      var tmp_0;
      if (groupKey === 126665345) {
        tmp_0 = groupKey;
      } else {
        var parent = $this.ty_1.m12(group);
        var parentKey = parent === recomposeGroup ? recomposeKey : compoundKeyOf($this, parent, rGroupIndexOf($this, parent), recomposeGroup, recomposeKey);
        var effectiveRGroupIndex = $this.ty_1.j15(group) ? 0 : rGroupIndex;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = rotateLeft(parentKey, 3) ^ groupKey;
        tmp_0 = rotateLeft(this_0, 3) ^ effectiveRGroupIndex;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.j15(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.q12(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp_1;
        if (tmp0_safe_receiver instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.p1_1;
        } else {
          if (tmp0_safe_receiver instanceof MovableContent) {
            tmp_1 = 126665345;
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp_0 = tmp_1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var it = _this__u8e3s4.p12(group);
      var tmp_2;
      if (it === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.o12(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp_3 = equals(tmp0_safe_receiver_0, Companion_getInstance().d13_1) ? it : hashCode(tmp0_safe_receiver_0);
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? it : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = it;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.wx_1 = $this.ty_1.l15();
    $this.ty_1.u12();
  }
  function addRecomposeScope($this) {
    if ($this.cz_1) {
      var tmp = $this.sx_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.qy_1.g14(scope);
      $this.l12(scope);
      scope.p15($this.ny_1);
    } else {
      var invalidation = removeLocation($this.ey_1, $this.ty_1.x10_1);
      var slot = $this.ty_1.h();
      var tmp_0;
      if (equals(slot, Companion_getInstance().d13_1)) {
        var tmp_1 = $this.sx_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.l12(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      var tmp_2;
      if (!(invalidation == null)) {
        tmp_2 = true;
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = scope_0.m15();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.addRecomposeScope.<anonymous>' call
        if (this_0) {
          scope_0.n15(false);
        }
        tmp_2 = this_0;
      }
      scope_0.o15(tmp_2);
      $this.qy_1.g14(scope_0);
      scope_0.p15($this.ny_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.q15(126665345, content);
    updateSlot($this, parameter);
    var savedCompoundKeyHash = $this.dz_1;
    try {
      $this.dz_1 = 126665345;
      if ($this.cz_1) {
        $this.vy_1.r15();
      }
      var providersChanged = $this.cz_1 ? false : !equals($this.ty_1.a13(), locals);
      if (providersChanged) {
        recordProviderUpdate($this, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_0().g12_1, locals);
      $this.xy_1 = null;
      if ($this.cz_1 && !force) {
        $this.wy_1 = true;
        var anchor = $this.vy_1.n12($this.vy_1.m12($this.vy_1.d12_1));
        var reference = new MovableContentStateReference(content, parameter, $this.sx_1, $this.uy_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.nx_1.s15(reference);
      } else {
        var savedProvidersInvalid = $this.iy_1;
        $this.iy_1 = providersChanged;
        invokeComposable($this, ComposableLambda$invoke$ref(composableLambdaInstance(316014703, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.iy_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.xy_1 = null;
      $this.dz_1 = savedCompoundKeyHash;
      $this.t15();
    }
  }
  function insertMovableContentGuarded($this, references) {
    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
    var this_0 = $this.zy_1;
    var newChangeList = $this.rx_1;
    var previousChangeList = this_0.c10_1;
    try {
      this_0.c10_1 = newChangeList;
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>' call
      $this.zy_1.u15();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.o(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
          var to = item.bd();
          var from = item.cd();
          var anchor = to.z15_1;
          var location = to.y15_1.c16(anchor);
          var effectiveNodeIndex = new IntRef();
          $this.zy_1.d16(effectiveNodeIndex, anchor);
          if (from == null) {
            var toSlotTable = to.y15_1;
            if (equals(toSlotTable, $this.uy_1)) {
              createFreshInsertTable($this);
            }
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader = to.y15_1.pz();
            var tmp;
            try {
              reader.e14(location);
              $this.zy_1.i16(location);
              var offsetChanges = new ChangeList();
              recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda($this, offsetChanges, reader, to));
              $this.zy_1.j16(offsetChanges, effectiveNodeIndex);
              tmp = Unit_instance;
            }finally {
              reader.d11();
            }
          } else {
            var resolvedState = $this.nx_1.e16(from);
            var tmp1_elvis_lhs = resolvedState == null ? null : resolvedState.f16_1;
            var fromTable = tmp1_elvis_lhs == null ? from.y15_1 : tmp1_elvis_lhs;
            var tmp3_safe_receiver = resolvedState == null ? null : resolvedState.f16_1;
            var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.n12(0);
            var fromAnchor = tmp4_elvis_lhs == null ? from.z15_1 : tmp4_elvis_lhs;
            var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!nodesToInsert.p()) {
              $this.zy_1.g16(nodesToInsert, effectiveNodeIndex);
              if (equals(to.y15_1, $this.ox_1)) {
                var group = $this.ox_1.c16(anchor);
                updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.i() | 0);
              }
            }
            $this.zy_1.h16(resolvedState, $this.nx_1, from, to);
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader_0 = fromTable.pz();
            var tmp_0;
            try {
              $l$block: {
                // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                var savedReader = $this.ty_1;
                var savedCountOverrides = $this.zx_1;
                var savedProviderUpdates = $this.hy_1;
                $this.zx_1 = null;
                $this.hy_1 = null;
                try {
                  $this.ty_1 = reader_0;
                  var newLocation = fromTable.c16(fromAnchor);
                  reader_0.e14(newLocation);
                  $this.zy_1.i16(newLocation);
                  var offsetChanges_0 = new ChangeList();
                  // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
                  var this_1 = $this.zy_1;
                  var previousChangeList_0 = this_1.c10_1;
                  try {
                    this_1.c10_1 = offsetChanges_0;
                    // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
                    var this_2 = $this.zy_1;
                    var previousImplicitRootStart = this_2.f10_1;
                    try {
                      this_2.f10_1 = false;
                      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                      var tmp_1 = reader_0.v10_1;
                      var tmp_2 = from.a16_1;
                      recomposeMovableContent($this, from.x15_1, to.x15_1, tmp_1, tmp_2, ComposerImpl$insertMovableContentGuarded$lambda_0($this, to));
                    }finally {
                      this_2.f10_1 = previousImplicitRootStart;
                    }
                  }finally {
                    this_1.c10_1 = previousChangeList_0;
                  }
                  $this.zy_1.j16(offsetChanges_0, effectiveNodeIndex);
                  break $l$block;
                }finally {
                  $this.ty_1 = savedReader;
                  $this.zx_1 = savedCountOverrides;
                  $this.hy_1 = savedProviderUpdates;
                }
              }
              tmp_0 = Unit_instance;
            }finally {
              reader_0.d11();
            }
          }
          $this.zy_1.k16();
        }
         while (inductionVariable <= last);
      $this.zy_1.l16();
      $this.zy_1.i16(0);
    }finally {
      this_0.c10_1 = previousChangeList;
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedIsComposing = $this.ry_1;
    var savedNodeIndex = $this.vx_1;
    try {
      $this.ry_1 = true;
      $this.vx_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.o(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.bd();
          var instances = item.cd();
          if (!(instances == null)) {
            $this.m16(scope, instances);
          } else {
            $this.m16(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (from == null) {
        tmp = null;
      } else {
        tmp = from.n16(to, index == null ? -1 : index, block);
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.ry_1 = savedIsComposing;
      $this.vx_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $super) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    index = index === VOID ? null : index;
    invalidations = invalidations === VOID ? emptyList() : invalidations;
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function doCompose($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.ry_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>' call
      var tmp$ret$0 = 'Reentrant composition is not supported';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    $l$block_1: {
      // Inline function 'androidx.compose.runtime.trace' call
      var sectionName = 'Compose:recompose';
      var token = Trace_instance.o16(sectionName);
      try {
        $this.ny_1 = currentSnapshot().t16();
        $this.hy_1 = null;
        // Inline function 'androidx.collection.ScatterMap.forEach' call
        var this_0 = invalidationsRequested.u16_1;
        var k = this_0.is_1;
        var v = this_0.js_1;
        $l$block_0: {
          // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
          var m = this_0.hs_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                      $l$block: {
                        // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
                        var tmp = k[index];
                        var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                        var tmp_0 = v[index];
                        var instances = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                        if (!(scope instanceof RecomposeScopeImpl))
                          THROW_CCE();
                        var tmp0_safe_receiver = scope.fx_1;
                        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v16_1;
                        var tmp_1;
                        if (tmp1_elvis_lhs == null) {
                          break $l$block;
                        } else {
                          tmp_1 = tmp1_elvis_lhs;
                        }
                        var location = tmp_1;
                        // Inline function 'kotlin.takeUnless' call
                        // Inline function 'kotlin.contracts.contract' call
                        var tmp_2;
                        // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>.<anonymous>' call
                        if (!(instances === ScopeInvalidated_instance)) {
                          tmp_2 = instances;
                        } else {
                          tmp_2 = null;
                        }
                        var tmp$ret$5 = tmp_2;
                        $this.ey_1.d(new Invalidation(scope, location, tmp$ret$5));
                      }
                    }
                    slot = slot.e2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block_0;
                }
              }
            }
             while (!(i === lastIndex));
        }
        sortWith($this.ey_1, get_InvalidationLocationAscending());
        $this.vx_1 = 0;
        var complete = false;
        $this.ry_1 = true;
        try {
          startRoot($this);
          var savedContent = $this.k12();
          if (!(savedContent === content) && !(content == null)) {
            $this.l12((content == null ? true : !(content == null)) ? content : THROW_CCE());
          }
          // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
          var observer = $this.py_1;
          var observers = derivedStateObservers_0();
          try {
            observers.z16(observer);
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
            if (!(content == null)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, content);
              endGroup($this);
            } else if (($this.cy_1 || $this.iy_1) && !(savedContent == null) && !equals(savedContent, Companion_getInstance().d13_1)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, (!(savedContent == null) ? typeof savedContent === 'function' : false) ? savedContent : THROW_CCE());
              endGroup($this);
            } else {
              $this.a17();
            }
          }finally {
            // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
            var tmp$ret$7 = observers.y16_1 - 1 | 0;
            observers.e1(tmp$ret$7);
          }
          endRoot($this);
          complete = true;
        }finally {
          $this.ry_1 = false;
          $this.ey_1.b1();
          if (!complete) {
            abortRoot($this);
          }
          createFreshInsertTable($this);
        }
        break $l$block_1;
      }finally {
        Trace_instance.b17(token);
      }
    }
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.c17(_this__u8e3s4.x10_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.c17(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!$this.dy_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      var tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    $this.dy_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.dy_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      var tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected';
      composeImmediateRuntimeError(tmp$ret$0);
    }
  }
  function recordInsert($this, anchor) {
    if ($this.bz_1.p()) {
      $this.zy_1.e17(anchor, $this.uy_1);
    } else {
      $this.zy_1.d17(anchor, $this.uy_1, $this.bz_1);
      $this.bz_1 = new FixupList();
    }
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.ty_1.v10_1);
    $this.zy_1.f17();
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    $this.zy_1.p14();
  }
  function reportAllMovableContent($this) {
    if ($this.ox_1.h17()) {
      var changes = new ChangeList();
      $this.yy_1 = changes;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var reader = $this.ox_1.pz();
      var tmp;
      try {
        $this.ty_1 = reader;
        // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
        var this_0 = $this.zy_1;
        var previousChangeList = this_0.c10_1;
        try {
          this_0.c10_1 = changes;
          // Inline function 'androidx.compose.runtime.ComposerImpl.reportAllMovableContent.<anonymous>.<anonymous>' call
          reportFreeMovableContent($this, 0);
          $this.zy_1.g17();
        }finally {
          this_0.c10_1 = previousChangeList;
        }
        tmp = Unit_instance;
      }finally {
        reader.d11();
      }
    }
  }
  function finalizeCompose($this) {
    $this.zy_1.i17();
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!$this.tx_1.p()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var tmp$ret$0 = 'Start/end imbalance';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.ux_1 = null;
    $this.vx_1 = 0;
    $this.wx_1 = 0;
    $this.dz_1 = 0;
    $this.dy_1 = false;
    $this.zy_1.j17();
    $this.qy_1.b1();
    clearUpdatedNodeCounts($this);
  }
  function CompositionContextHolder() {
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var reader = this$0.ty_1;
    var tmp;
    if (reader.a18(group)) {
      var key = reader.p12(group);
      var objectKey = reader.q12(group);
      var tmp_0;
      var tmp_1;
      if (key === 126665345) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = reader.l17(group, 0);
        var anchor = reader.n12(group);
        var end = group + reader.l14(group) | 0;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var this_0 = filterToRange(this$0.ey_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(this_0.i());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            var element = to(item.zw_1, item.bx_1);
            target.d(element);
          }
           while (inductionVariable <= last);
        var invalidations = target;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.sx_1, this$0.ox_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.nx_1.w17(reference);
        this$0.zy_1.x17();
        this$0.zy_1.y17(this$0.sx_1, this$0.nx_1, reference);
        var tmp_2;
        if (needsNodeDelete) {
          this$0.zy_1.z17(nodeIndex, group);
          tmp_2 = 0;
        } else {
          tmp_2 = reader.i15(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 && equals(objectKey, get_reference())) {
          var tmp_3 = reader.l17(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.m17_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator = compositionContext.s17_1.f();
            while (tmp0_iterator.g()) {
              var element_0 = tmp0_iterator.h();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element_0);
              this$0.nx_1.v17(element_0.sx_1);
            }
          }
          tmp_0 = reader.i15(group);
        } else {
          if (reader.h15(group)) {
            tmp_0 = 1;
          } else {
            tmp_0 = reader.i15(group);
          }
        }
      }
      tmp = tmp_0;
    } else if (reader.k17(group)) {
      var size = reader.l14(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = reader.h15(current);
        if (isNode) {
          this$0.zy_1.p14();
          this$0.zy_1.k15(reader.c17(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode || needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          this$0.zy_1.p14();
          this$0.zy_1.s14();
        }
        current = current + reader.l14(current) | 0;
      }
      tmp = reader.h15(group) ? 1 : runningNodeCount;
    } else if (reader.h15(group)) {
      tmp = 1;
    } else {
      tmp = reader.i15(group);
    }
    return tmp;
  }
  function ComposerImpl$derivedStateObserver$1(this$0) {
    this.b18_1 = this$0;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.c18(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C3293@126183L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.e18()) {
        if (isTraceInProgress()) {
          traceEventStart(316014703, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:3293)');
        }
        $content.d18_1($parameter, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.u12();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda(this$0, $offsetChanges, $reader, $to) {
    return function () {
      var this_0 = this$0.zy_1;
      var newChangeList = $offsetChanges;
      var previousChangeList = this_0.c10_1;
      var tmp;
      try {
        this_0.c10_1 = newChangeList;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
          var this_1 = this$0;
          var reader = $reader;
          var savedReader = this_1.ty_1;
          var savedCountOverrides = this_1.zx_1;
          var savedProviderUpdates = this_1.hy_1;
          this_1.zx_1 = null;
          this_1.hy_1 = null;
          try {
            this_1.ty_1 = reader;
            // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
            var this_2 = this$0.zy_1;
            var previousImplicitRootStart = this_2.f10_1;
            try {
              this_2.f10_1 = false;
              // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              invokeMovableContentLambda(this$0, $to.v15_1, $to.b16_1, $to.w15_1, true);
            }finally {
              this_2.f10_1 = previousImplicitRootStart;
            }
            break $l$block;
          }finally {
            this_1.ty_1 = savedReader;
            this_1.zx_1 = savedCountOverrides;
            this_1.hy_1 = savedProviderUpdates;
          }
        }
        tmp = Unit_instance;
      }finally {
        this_0.c10_1 = previousChangeList;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.v15_1, $to.b16_1, $to.w15_1, true);
      return Unit_instance;
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.mx_1 = applier;
    this.nx_1 = parentContext;
    this.ox_1 = slotTable;
    this.px_1 = abandonSet;
    this.qx_1 = changes;
    this.rx_1 = lateChanges;
    this.sx_1 = composition;
    this.tx_1 = new Stack();
    this.ux_1 = null;
    this.vx_1 = 0;
    this.wx_1 = 0;
    this.xx_1 = 0;
    this.yx_1 = new IntStack();
    this.zx_1 = null;
    this.ay_1 = null;
    this.by_1 = false;
    this.cy_1 = false;
    this.dy_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.ey_1 = ArrayList_init_$Create$();
    this.fy_1 = new IntStack();
    this.gy_1 = persistentCompositionLocalHashMapOf();
    this.hy_1 = null;
    this.iy_1 = false;
    this.jy_1 = new IntStack();
    this.ky_1 = false;
    this.ly_1 = -1;
    this.my_1 = 0;
    this.ny_1 = 0;
    this.oy_1 = this.nx_1.xz() || this.nx_1.x12();
    var tmp_0 = this;
    tmp_0.py_1 = new ComposerImpl$derivedStateObserver$1(this);
    this.qy_1 = new Stack();
    this.ry_1 = false;
    this.sy_1 = false;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.ox_1.pz();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    this_0.d11();
    tmp_1.ty_1 = this_0;
    var tmp_2 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new SlotTable();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.insertTable.<anonymous>' call
    if (this.nx_1.xz()) {
      this_1.v12();
    }
    if (this.nx_1.x12()) {
      this_1.w12();
    }
    tmp_2.uy_1 = this_1;
    var tmp_3 = this;
    // Inline function 'kotlin.also' call
    var this_2 = this.uy_1.t12();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    this_2.y12(true);
    tmp_3.vy_1 = this_2;
    this.wy_1 = false;
    this.xy_1 = null;
    this.yy_1 = null;
    this.zy_1 = new ComposerChangeListWriter(this, this.qx_1);
    var tmp_4 = this;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = this.uy_1.pz();
    var tmp_5;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp_5 = reader.n12(0);
    }finally {
      reader.d11();
    }
    tmp_4.az_1 = tmp_5;
    this.bz_1 = new FixupList();
    this.cz_1 = false;
    this.dz_1 = 0;
  }
  protoOf(ComposerImpl).f18 = function () {
    return this.mx_1;
  };
  protoOf(ComposerImpl).g18 = function () {
    return this.my_1 > 0;
  };
  protoOf(ComposerImpl).h18 = function () {
    return this.nx_1.i18();
  };
  protoOf(ComposerImpl).j18 = function (key) {
    return start(this, key, null, Companion_getInstance_0().g12_1, null);
  };
  protoOf(ComposerImpl).k18 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).l18 = function (key) {
    var pending = this.ux_1;
    if (!(pending == null)) {
      start(this, key, null, Companion_getInstance_0().g12_1, null);
      return Unit_instance;
    }
    validateNodeNotExpected(this);
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
    var rGroupIndex = this.xx_1;
    if (null == null)
      if (!(null == null) && key === 207 && !equals(null, Companion_getInstance().d13_1)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash = hashCode(null);
        var tmp = this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = this.dz_1;
        var this_1 = rotateLeft(this_0, 3) ^ keyHash;
        tmp.dz_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var tmp_0 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_2 = this.dz_1;
        var this_3 = rotateLeft(this_2, 3) ^ key;
        tmp_0.dz_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
      }
     else {
      if (null instanceof Enum) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_0 = null.p1_1;
        var tmp_1 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_4 = this.dz_1;
        var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
        tmp_1.dz_1 = rotateLeft(this_5, 3) ^ 0;
      } else {
        var keyHash_1 = hashCode(null);
        var tmp_2 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_6 = this.dz_1;
        var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
        tmp_2.dz_1 = rotateLeft(this_7, 3) ^ 0;
      }
    }
    this.xx_1 = this.xx_1 + 1 | 0;
    var reader = this.ty_1;
    if (this.cz_1) {
      reader.e13();
      this.vy_1.f13(key, Companion_getInstance().d13_1);
      enterGroup(this, false, null);
      return Unit_instance;
    }
    var slotKey = reader.q13();
    if (slotKey === key && !reader.m18()) {
      reader.b13();
      enterGroup(this, false, null);
      return Unit_instance;
    }
    if (!reader.r14()) {
      var removeIndex = this.vx_1;
      var startSlot = reader.v10_1;
      recordDelete(this);
      var nodesToRemove = reader.j12();
      this.zy_1.j14(removeIndex, nodesToRemove);
      removeRange(this.ey_1, startSlot, reader.v10_1);
    }
    reader.e13();
    this.cz_1 = true;
    this.xy_1 = null;
    ensureWriter(this);
    var writer = this.vy_1;
    writer.u13();
    var startIndex = writer.b12_1;
    writer.f13(key, Companion_getInstance().d13_1);
    this.az_1 = writer.n12(startIndex);
    enterGroup(this, false, null);
  };
  protoOf(ComposerImpl).n18 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).q15 = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_0().g12_1, null);
  };
  protoOf(ComposerImpl).t15 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).o18 = function () {
    this.hy_1 = null;
  };
  protoOf(ComposerImpl).p18 = function () {
    return this.cz_1;
  };
  protoOf(ComposerImpl).e18 = function () {
    var tmp;
    var tmp_0;
    if (!this.cz_1 && !this.ky_1 && !this.iy_1) {
      var tmp0_safe_receiver = this.q18();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r18()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.cy_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).c13 = function () {
    start(this, 125, null, Companion_getInstance_0().h12_1, null);
    this.dy_1 = true;
  };
  protoOf(ComposerImpl).s18 = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.cz_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      var tmp$ret$0 = 'createNode() can only be called when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var insertIndex = this.yx_1.t18();
    var groupAnchor = this.vy_1.n12(this.vy_1.d12_1);
    this.wx_1 = this.wx_1 + 1 | 0;
    this.bz_1.u18(factory, insertIndex, groupAnchor);
  };
  protoOf(ComposerImpl).v18 = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.cz_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      var tmp$ret$0 = 'useNode() called while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var node = _get_node__db0vwp(this.ty_1, this);
    this.zy_1.k15(node);
    var tmp;
    if (this.ky_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.zy_1.w18(node);
    }
  };
  protoOf(ComposerImpl).x18 = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).y18 = function (value, block) {
    if (this.cz_1) {
      this.bz_1.a19(value, block);
    } else {
      this.zy_1.z18(value, block);
    }
  };
  protoOf(ComposerImpl).k12 = function () {
    var tmp;
    if (this.cz_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance().d13_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      var it = this.ty_1.h();
      var tmp_0;
      var tmp_1;
      if (this.ky_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance().d13_1;
      } else {
        tmp_0 = it;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).b19 = function () {
    var tmp;
    if (this.cz_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance().d13_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlotForCache.<anonymous>' call
      var it = this.ty_1.h();
      var tmp_0;
      var tmp_1;
      if (this.ky_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance().d13_1;
      } else {
        if (it instanceof RememberObserverHolder) {
          tmp_0 = it.c19_1;
        } else {
          tmp_0 = it;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).vz = function (value) {
    var tmp;
    if (!equals(this.k12(), value)) {
      this.l12(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).e19 = function (value) {
    var tmp;
    if (!(this.k12() === value)) {
      this.l12(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).f19 = function (value) {
    var next = this.k12();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.l12(value);
    return true;
  };
  protoOf(ComposerImpl).l12 = function (value) {
    if (this.cz_1) {
      this.vy_1.l19(value);
    } else {
      if (this.ty_1.c11_1) {
        var groupSlotIndex = this.ty_1.h19() - 1 | 0;
        if (this.zy_1.k19()) {
          this.zy_1.j19(value, this.ty_1.n12(this.ty_1.x10_1), groupSlotIndex);
        } else {
          this.zy_1.i19(value, groupSlotIndex);
        }
      } else {
        this.zy_1.g19(this.ty_1.n12(this.ty_1.x10_1), value);
      }
    }
  };
  protoOf(ComposerImpl).m19 = function (value) {
    var tmp;
    if (!(value == null) ? isInterface(value, RememberObserver) : false) {
      if (this.cz_1) {
        this.zy_1.n19(value);
      }
      this.px_1.d(value);
      tmp = new RememberObserverHolder(value, rememberObserverAnchor(this));
    } else {
      tmp = value;
    }
    var toStore = tmp;
    this.l12(toStore);
  };
  protoOf(ComposerImpl).q18 = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    var it = this.qy_1;
    return this.my_1 === 0 && it.au() ? it.t18() : null;
  };
  protoOf(ComposerImpl).m16 = function (scope, instance) {
    var tmp0_elvis_lhs = scope.fx_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var slotTable = this.ty_1.o10_1;
    var location = anchor.o19(slotTable);
    if (this.ry_1 && location >= this.ty_1.v10_1) {
      insertIfMissing(this.ey_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).a17 = function () {
    if (this.ey_1.p()) {
      skipGroup(this);
    } else {
      var reader = this.ty_1;
      var key = reader.q13();
      var dataKey = reader.s13();
      var aux = reader.a13();
      var rGroupIndex = this.xx_1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
      if (dataKey == null)
        if (!(aux == null) && key === 207 && !equals(aux, Companion_getInstance().d13_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var keyHash = hashCode(aux);
          var tmp = this;
          // Inline function 'androidx.compose.runtime.rol' call
          // Inline function 'androidx.compose.runtime.rol' call
          var this_0 = this.dz_1;
          var this_1 = rotateLeft(this_0, 3) ^ keyHash;
          tmp.dz_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var tmp_0 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          // Inline function 'androidx.compose.runtime.rol' call
          var this_2 = this.dz_1;
          var this_3 = rotateLeft(this_2, 3) ^ key;
          tmp_0.dz_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
        }
       else {
        if (dataKey instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var keyHash_0 = dataKey.p1_1;
          var tmp_1 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          // Inline function 'androidx.compose.runtime.rol' call
          var this_4 = this.dz_1;
          var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
          tmp_1.dz_1 = rotateLeft(this_5, 3) ^ 0;
        } else {
          var keyHash_1 = hashCode(dataKey);
          var tmp_2 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          // Inline function 'androidx.compose.runtime.rol' call
          var this_6 = this.dz_1;
          var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
          tmp_2.dz_1 = rotateLeft(this_7, 3) ^ 0;
        }
      }
      startReaderGroup(this, reader.p19(), null);
      recomposeToGroupEnd(this);
      reader.w14();
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      if (dataKey == null)
        if (!(aux == null) && key === 207 && !equals(aux, Companion_getInstance().d13_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey = hashCode(aux);
          var tmp_3 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_8 = this.dz_1 ^ rGroupIndex;
          var this_9 = rotateRight(this_8, 3) ^ groupKey;
          tmp_3.dz_1 = rotateRight(this_9, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_4 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_10 = this.dz_1 ^ rGroupIndex;
          var this_11 = rotateRight(this_10, 3) ^ key;
          tmp_4.dz_1 = rotateRight(this_11, 3);
        }
       else {
        if (dataKey instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_0 = dataKey.p1_1;
          var tmp_5 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_12 = this.dz_1 ^ 0;
          var this_13 = rotateRight(this_12, 3) ^ groupKey_0;
          tmp_5.dz_1 = rotateRight(this_13, 3);
        } else {
          var groupKey_1 = hashCode(dataKey);
          var tmp_6 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_14 = this.dz_1 ^ 0;
          var this_15 = rotateRight(this_14, 3) ^ groupKey_1;
          tmp_6.dz_1 = rotateRight(this_15, 3);
        }
      }
    }
  };
  protoOf(ComposerImpl).u12 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.wx_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      var tmp$ret$0 = 'No nodes can be emitted before calling skipAndEndGroup';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var tmp0_safe_receiver = this.q18();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.q19();
    }
    if (this.ey_1.p()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).r19 = function (key) {
    this.l18(key);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).s19 = function () {
    var scope = this.qy_1.au() ? this.qy_1.e11() : null;
    if (scope != null) {
      scope.o15(false);
    }
    var tmp2_safe_receiver = scope == null ? null : scope.t19(this.ny_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.zy_1.u19(tmp2_safe_receiver, this.sx_1);
    }
    var tmp;
    if (!(scope == null) && !scope.w19() && (scope.i14() || this.by_1)) {
      if (scope.fx_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.cz_1) {
          tmp_1 = this.vy_1.n12(this.vy_1.d12_1);
        } else {
          tmp_1 = this.ty_1.n12(this.ty_1.x10_1);
        }
        tmp_0.fx_1 = tmp_1;
      }
      scope.v19(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).x19 = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  protoOf(ComposerImpl).y19 = function (sourceInformation) {
    if (this.cz_1 && this.oy_1) {
      this.vy_1.z19(sourceInformation);
    }
  };
  protoOf(ComposerImpl).a1a = function (key, sourceInformation) {
    if (this.cz_1 && this.oy_1) {
      this.vy_1.b1a(key, sourceInformation);
    }
  };
  protoOf(ComposerImpl).c1a = function () {
    if (this.cz_1 && this.oy_1) {
      this.vy_1.d1a();
    }
  };
  protoOf(ComposerImpl).e1a = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.qx_1.p()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent.<anonymous>' call
      var tmp$ret$0 = 'Expected applyChanges() to have been called';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    doCompose(this, invalidationsRequested, content);
  };
  protoOf(ComposerImpl).g1a = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.ry_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      var tmp$ret$0 = 'Preparing a composition while composing is not supported';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.ry_1 = true;
    try {
      block();
    }finally {
      this.ry_1 = false;
    }
  };
  protoOf(ComposerImpl).h1a = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.qx_1.p()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      var tmp$ret$0 = 'Expected applyChanges() to have been called';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.i() > 0) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !this.ey_1.p();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.cy_1;
    }
    if (tmp) {
      doCompose(this, invalidationsRequested, null);
      return this.qx_1.au();
    }
    return false;
  };
  protoOf(ComposerImpl).i1a = function () {
    return this.q18();
  };
  protoOf(ComposerImpl).j1a = function () {
    return this.b19();
  };
  protoOf(ComposerImpl).k1a = function (value) {
    return this.m19(value);
  };
  protoOf(ComposerImpl).l1a = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.m1a(true);
    }
  };
  function Composer$Companion$Empty$1() {
  }
  protoOf(Composer$Companion$Empty$1).toString = function () {
    return 'Empty';
  };
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.d13_1 = new Composer$Companion$Empty$1();
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Composer() {
  }
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_instance;
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function composeRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'androidx.compose.runtime.SlotWriter.forAllData' call
    var group = _this__u8e3s4.b12_1;
    var address = groupIndexToAddress(_this__u8e3s4, group);
    var start = dataIndex_0(_this__u8e3s4.j11_1, _this__u8e3s4, address);
    var end = dataIndex_0(_this__u8e3s4.j11_1, _this__u8e3s4, groupIndexToAddress(_this__u8e3s4, _this__u8e3s4.b12_1 + _this__u8e3s4.l14(_this__u8e3s4.b12_1) | 0));
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.removeCurrentGroup.<anonymous>' call
        var slot_0 = _this__u8e3s4.k11_1[dataIndexToDataAddress(_this__u8e3s4, slot)];
        if (!(slot_0 == null) ? isInterface(slot_0, ComposeNodeLifecycleCallback) : false) {
          var endRelativeOrder = _this__u8e3s4.n1a() - slot | 0;
          rememberManager.o1a(slot_0, endRelativeOrder, -1, -1);
        }
        if (slot_0 instanceof RememberObserverHolder) {
          var endRelativeSlotIndex = _this__u8e3s4.n1a() - slot | 0;
          // Inline function 'androidx.compose.runtime.withAfterAnchorInfo' call
          var anchor = slot_0.d19_1;
          var priority = -1;
          var endRelativeAfter = -1;
          if (!(anchor == null) && anchor.q1a()) {
            priority = _this__u8e3s4.c16(anchor);
            endRelativeAfter = _this__u8e3s4.n1a() - _this__u8e3s4.p1a(priority) | 0;
          }
          // Inline function 'androidx.compose.runtime.removeCurrentGroup.<anonymous>.<anonymous>' call
          var priority_0 = priority;
          var endRelativeAfter_0 = endRelativeAfter;
          rememberManager.r1a(slot_0.c19_1, endRelativeSlotIndex, priority_0, endRelativeAfter_0);
        }
        if (slot_0 instanceof RecomposeScopeImpl) {
          slot_0.s1a();
        }
      }
       while (inductionVariable < end);
    _this__u8e3s4.t1a();
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.v15_1 = content;
    this.w15_1 = parameter;
    this.x15_1 = composition;
    this.y15_1 = slotTable;
    this.z15_1 = anchor;
    this.a16_1 = invalidations;
    this.b16_1 = locals;
  }
  function runtimeCheck(value) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!value) {
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      var tmp$ret$0 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$0);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function MovableContentState(slotTable) {
    this.f16_1 = slotTable;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.y19(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    var it = get_compositionTracer();
    return !(it == null) && it.u1a();
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.v1a(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w1a();
    }
  }
  function MovableContent() {
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.x1a_1 = message;
  }
  protoOf(ComposeRuntimeError).l8 = function () {
    return this.x1a_1;
  };
  function RememberObserverHolder(wrapped, after) {
    this.c19_1 = wrapped;
    this.d19_1 = after;
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableScatterMultiMap(multiMap(this$0.i13_1.i()));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var it = this_0.y1a_1;
      var inductionVariable = 0;
      var last = this$0.i13_1.i();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.i13_1.o(index);
          MutableScatterMultiMap__put_impl_1qpnrt(it, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      var tmp$ret$0 = this_0.y1a_1;
      return new MutableScatterMultiMap(tmp$ret$0);
    };
  }
  function Pending(keyInfos, startIndex) {
    this.i13_1 = keyInfos;
    this.j13_1 = startIndex;
    this.k13_1 = 0;
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j13_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      var tmp$ret$0 = 'Invalid start index';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.l13_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    var result = new MutableIntObjectMap();
    var inductionVariable = 0;
    var last = this.i13_1.i();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.i13_1.o(index);
        result.yq(keyInfo.x13_1, new GroupInfo(index, runningNodeIndex, keyInfo.y13_1));
        runningNodeIndex = runningNodeIndex + keyInfo.y13_1 | 0;
      }
       while (inductionVariable < last);
    tmp_0.m13_1 = result;
    var tmp_1 = this;
    tmp_1.n13_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).z1a = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.n13_1;
    keyMap$factory();
    return this_0.i1().y1a_1;
  };
  protoOf(Pending).t13 = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return MutableScatterMultiMap__pop_impl_h6qh61(this.z1a(), joinedKey);
  };
  protoOf(Pending).p13 = function (keyInfo) {
    return this.l13_1.d(keyInfo);
  };
  protoOf(Pending).i14 = function () {
    return this.l13_1;
  };
  protoOf(Pending).c14 = function (from, to) {
    if (from > to) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_0 = this.m13_1;
      var v = this_0.pq_1;
      $l$block: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m = this_0.nq_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
                    var tmp = v[index];
                    var group = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var position = group.a1b_1;
                    if (position === from)
                      group.a1b_1 = to;
                    else if (to <= position ? position < from : false)
                      group.a1b_1 = position + 1 | 0;
                  }
                  slot = slot.e2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    } else if (to > from) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_2 = this.m13_1;
      var v_0 = this_2.pq_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m_0 = this_2.nq_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.g2(this_3.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount_0)
                do {
                  var j_0 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_0 = (i_0 << 3) + j_0 | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
                    var tmp_0 = v_0[index_0];
                    var group_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    var position_0 = group_0.a1b_1;
                    if (position_0 === from)
                      group_0.a1b_1 = to;
                    else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
                      group_0.a1b_1 = position_0 - 1 | 0;
                  }
                  slot_0 = slot_0.e2(8);
                }
                 while (inductionVariable_2 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
  };
  protoOf(Pending).o14 = function (from, to, count) {
    if (from > to) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_0 = this.m13_1;
      var v = this_0.pq_1;
      $l$block: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m = this_0.nq_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
                    var tmp = v[index];
                    var group = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var position = group.b1b_1;
                    if (from <= position ? position < (from + count | 0) : false)
                      group.b1b_1 = to + (position - from | 0) | 0;
                    else if (to <= position ? position < from : false)
                      group.b1b_1 = position + count | 0;
                  }
                  slot = slot.e2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    } else if (to > from) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_2 = this.m13_1;
      var v_0 = this_2.pq_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m_0 = this_2.nq_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.g2(this_3.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount_0)
                do {
                  var j_0 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_0 = (i_0 << 3) + j_0 | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
                    var tmp_0 = v_0[index_0];
                    var group_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    var position_0 = group_0.b1b_1;
                    if (from <= position_0 ? position_0 < (from + count | 0) : false)
                      group_0.b1b_1 = to + (position_0 - from | 0) | 0;
                    else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
                      group_0.b1b_1 = position_0 - count | 0;
                  }
                  slot_0 = slot_0.e2(8);
                }
                 while (inductionVariable_2 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
  };
  protoOf(Pending).o13 = function (keyInfo, insertIndex) {
    this.m13_1.yq(keyInfo.x13_1, new GroupInfo(-1, insertIndex, 0));
  };
  protoOf(Pending).k14 = function (group, newCount) {
    var groupInfo = this.m13_1.o(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.b1b_1;
      var difference = newCount - groupInfo.c1b_1 | 0;
      groupInfo.c1b_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
        var this_0 = this.m13_1;
        var v = this_0.pq_1;
        $l$block: {
          // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
          var m = this_0.nq_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                      var index_0 = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
                      var tmp = v[index_0];
                      var childGroupInfo = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (childGroupInfo.b1b_1 >= index && !equals(childGroupInfo, groupInfo)) {
                        var newIndex = childGroupInfo.b1b_1 + difference | 0;
                        if (newIndex >= 0)
                          childGroupInfo.b1b_1 = newIndex;
                      }
                    }
                    slot = slot.e2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).b14 = function (keyInfo) {
    var tmp0_safe_receiver = this.m13_1.o(keyInfo.x13_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1b_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).a14 = function (keyInfo) {
    var tmp0_safe_receiver = this.m13_1.o(keyInfo.x13_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b1b_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).m14 = function (keyInfo) {
    var tmp0_safe_receiver = this.m13_1.o(keyInfo.x13_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1b_1;
    return tmp1_elvis_lhs == null ? keyInfo.y13_1 : tmp1_elvis_lhs;
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.g12_1 = _GroupKind___init__impl__iwqg06(0);
    this.h12_1 = _GroupKind___init__impl__iwqg06(1);
    this.i12_1 = _GroupKind___init__impl__iwqg06(2);
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.i()) {
      var validation = _this__u8e3s4.o(index);
      if (validation.ax_1 < end) {
        _this__u8e3s4.e1(index);
      } else
        break $l$loop;
    }
  }
  function asInt(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4 ? 1 : 0;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function ReusableRememberObserver() {
  }
  function get_isAfterFirstChild(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4.b12_1 > (_this__u8e3s4.d12_1 + 1 | 0);
  }
  function get_isAfterFirstChild_0(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4.v10_1 > (_this__u8e3s4.x10_1 + 1 | 0);
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.i()) {
      var firstInvalidation = _this__u8e3s4.o(index);
      if (firstInvalidation.ax_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.e1(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common || b === common)
      return common;
    if (_this__u8e3s4.m12(a) === b)
      return b;
    if (_this__u8e3s4.m12(b) === a)
      return a;
    if (_this__u8e3s4.m12(a) === _this__u8e3s4.m12(b))
      return _this__u8e3s4.m12(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var times = aDistance - bDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.m12(currentA);
      }
       while (inductionVariable < times);
    // Inline function 'kotlin.repeat' call
    var times_0 = bDistance - aDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.m12(currentB);
      }
       while (inductionVariable_0 < times_0);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.m12(currentA);
      currentB = _this__u8e3s4.m12(currentB);
    }
    return currentA;
  }
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
      if (!(instance == null) ? isInterface(instance, DerivedState) : false) {
        tmp_0 = instance;
      } else {
        tmp_0 = null;
      }
      var tmp$ret$1 = tmp_0;
      _this__u8e3s4.d1(tmp, new Invalidation(scope, location, tmp$ret$1));
    } else {
      var invalidation = _this__u8e3s4.o(index);
      if (!(instance == null) ? isInterface(instance, DerivedState) : false) {
        var oldInstance = invalidation.bx_1;
        if (oldInstance == null)
          invalidation.bx_1 = instance;
        else {
          if (oldInstance instanceof MutableScatterSet) {
            if (!(oldInstance instanceof MutableScatterSet))
              THROW_CCE();
            oldInstance.d(instance);
          } else {
            invalidation.bx_1 = mutableScatterSetOf(oldInstance, instance);
          }
        }
      } else {
        invalidation.bx_1 = null;
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = _this__u8e3s4.pz();
    var tmp;
    try {
      var index = _this__u8e3s4.c16(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(reader, result, index);
      tmp = Unit_instance;
    }finally {
      reader.d11();
    }
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.i()) {
      var invalidation = _this__u8e3s4.o(index);
      if (invalidation.ax_1 < end) {
        result.d(invalidation);
      } else
        break $l$loop;
      index = index + 1 | 0;
    }
    return result;
  }
  function composeImmediateRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.a1b_1 = slotIndex;
    this.b1b_1 = nodeIndex;
    this.c1b_1 = nodeCount;
  }
  function _MutableScatterMultiMap___init__impl__s8ohqe(map) {
    return map;
  }
  function _MutableScatterMultiMap___get_map__impl__38gkgh($this) {
    return $this;
  }
  function MutableScatterMultiMap__put_impl_1qpnrt($this, key, value) {
    // Inline function 'androidx.collection.MutableScatterMap.compute' call
    var this_0 = _MutableScatterMultiMap___get_map__impl__38gkgh($this);
    var index = this_0.ts(key);
    var inserting = index < 0;
    // Inline function 'androidx.compose.runtime.MutableScatterMultiMap.put.<anonymous>' call
    var tmp;
    if (inserting) {
      tmp = null;
    } else {
      var tmp_0 = this_0.js_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    var previous = tmp;
    var tmp_1;
    if (previous == null) {
      tmp_1 = value;
    } else {
      if (!(previous == null) ? isInterface(previous, KtMutableList) : false) {
        var list = (!(previous == null) ? isInterface(previous, KtMutableList) : false) ? previous : THROW_CCE();
        list.d(value);
        tmp_1 = list;
      } else {
        tmp_1 = mutableListOf([previous, value]);
      }
    }
    var computedValue = tmp_1;
    if (inserting) {
      var insertionIndex = ~index;
      this_0.is_1[insertionIndex] = key;
      this_0.js_1[insertionIndex] = computedValue;
    } else {
      this_0.js_1[index] = computedValue;
    }
  }
  function MutableScatterMultiMap__pop_impl_h6qh61($this, key) {
    var tmp0_safe_receiver = _MutableScatterMultiMap___get_map__impl__38gkgh($this).l1(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.MutableScatterMultiMap.pop.<anonymous>' call
      var tmp_0;
      if (isInterface(tmp0_safe_receiver, KtMutableList)) {
        var list = isInterface(tmp0_safe_receiver, KtMutableList) ? tmp0_safe_receiver : THROW_CCE();
        var result = list.e1(0);
        if (list.p()) {
          _MutableScatterMultiMap___get_map__impl__38gkgh($this).u3(key);
        }
        tmp_0 = result;
      } else {
        _MutableScatterMultiMap___get_map__impl__38gkgh($this).u3(key);
        tmp_0 = tmp0_safe_receiver;
      }
      var tmp_1 = tmp_0;
      tmp = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
    }
    return tmp;
  }
  function MutableScatterMultiMap__toString_impl_ksvnwa($this) {
    return 'MutableScatterMultiMap(map=' + $this.toString() + ')';
  }
  function MutableScatterMultiMap__hashCode_impl_sh2h9z($this) {
    return $this.hashCode();
  }
  function MutableScatterMultiMap__equals_impl_j6710t($this, other) {
    if (!(other instanceof MutableScatterMultiMap))
      return false;
    var tmp0_other_with_cast = other instanceof MutableScatterMultiMap ? other.y1a_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function MutableScatterMultiMap(map) {
    this.y1a_1 = map;
  }
  protoOf(MutableScatterMultiMap).toString = function () {
    return MutableScatterMultiMap__toString_impl_ksvnwa(this.y1a_1);
  };
  protoOf(MutableScatterMultiMap).hashCode = function () {
    return MutableScatterMultiMap__hashCode_impl_sh2h9z(this.y1a_1);
  };
  protoOf(MutableScatterMultiMap).equals = function (other) {
    return MutableScatterMultiMap__equals_impl_j6710t(this.y1a_1, other);
  };
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.w13_1 == null) ? new JoinedKey(_this__u8e3s4.v13_1, _this__u8e3s4.w13_1) : _this__u8e3s4.v13_1;
  }
  function multiMap(initialCapacity) {
    _init_properties_Composer_kt__bmp4g0();
    return _MutableScatterMultiMap___init__impl__s8ohqe(new MutableScatterMap(initialCapacity));
  }
  function findInsertLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    var it = findLocation(_this__u8e3s4, location);
    return it < 0 ? -(it + 1 | 0) | 0 : it;
  }
  function findLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var low = 0;
    var high = _this__u8e3s4.i() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.o(mid);
      var cmp = compareTo(midVal.ax_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    _init_properties_Composer_kt__bmp4g0();
    var count = 0;
    var current = index;
    while (current > 0 && !(current === root)) {
      current = _this__u8e3s4.m12(current);
      count = count + 1 | 0;
    }
    return count;
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.a1a(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.c1a();
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this);
    if ($this$with.p18() || !equals($this$with.j1a(), value)) {
      $this$with.k1a(value);
      _Updater___get_composer__impl__9ty7av($this).y18(value, block);
    }
    return Unit_instance;
  }
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.d1b_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).e1b = function (a, b) {
    return this.d1b_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.e1b(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).l2 = function () {
    return this.d1b_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.l2(), other.l2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.l2());
  };
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.h15(group)) {
      result.d($reader.c17(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.l14(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.l14(current) | 0;
      }
    }
  }
  function InvalidationLocationAscending$lambda(i1, i2) {
    _init_properties_Composer_kt__bmp4g0();
    return compareTo(i1.ax_1, i2.ax_1);
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return new MutableScatterMultiMap(receiver.z1a());
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function _init_properties_Composer_kt__bmp4g0() {
    if (!properties_initialized_Composer_kt_89qzc2) {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
      var tmp = InvalidationLocationAscending$lambda;
      InvalidationLocationAscending = new sam$kotlin_Comparator$0(tmp);
    }
  }
  function get_PendingApplyNoModifications() {
    _init_properties_Composition_kt__t5pjw8();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  var CompositionImplServiceKey;
  function recordLeaving($this, instance, endRelativeOrder, priority, endRelativeAfter) {
    processPendingLeaving($this, endRelativeOrder);
    if (0 <= endRelativeAfter ? endRelativeAfter < endRelativeOrder : false) {
      $this.k1b_1.d(instance);
      $this.l1b_1.kq(priority);
      $this.m1b_1.kq(endRelativeAfter);
    } else {
      $this.h1b_1.d(instance);
    }
  }
  function processPendingLeaving($this, endRelativeOrder) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.k1b_1.p()) {
      var index = 0;
      var toAdd = null;
      var toAddAfter = null;
      var toAddPriority = null;
      while (index < $this.m1b_1.i()) {
        if (endRelativeOrder <= $this.m1b_1.o(index)) {
          var instance = $this.k1b_1.e1(index);
          var endRelativeAfter = $this.m1b_1.e1(index);
          var priority = $this.l1b_1.e1(index);
          if (toAdd == null) {
            toAdd = mutableListOf([instance]);
            // Inline function 'kotlin.also' call
            var this_0 = new MutableIntList();
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RememberEventDispatcher.processPendingLeaving.<anonymous>' call
            this_0.kq(endRelativeAfter);
            toAddAfter = this_0;
            // Inline function 'kotlin.also' call
            var this_1 = new MutableIntList();
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RememberEventDispatcher.processPendingLeaving.<anonymous>' call
            this_1.kq(priority);
            toAddPriority = this_1;
          } else {
            if (!(toAddPriority instanceof MutableIntList))
              THROW_CCE();
            if (!(toAddAfter instanceof MutableIntList))
              THROW_CCE();
            toAdd.d(instance);
            toAddAfter.kq(endRelativeAfter);
            toAddPriority.kq(priority);
          }
        } else {
          index = index + 1 | 0;
        }
      }
      if (!(toAdd == null)) {
        if (!(toAddPriority instanceof MutableIntList))
          THROW_CCE();
        if (!(toAddAfter instanceof MutableIntList))
          THROW_CCE();
        var inductionVariable = 0;
        var last = toAdd.i() - 1 | 0;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var inductionVariable_0 = i + 1 | 0;
            var last_0 = toAdd.i();
            if (inductionVariable_0 < last_0)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var iAfter = toAddAfter.o(i);
                var jAfter = toAddAfter.o(j);
                if (iAfter < jAfter || (jAfter === iAfter && toAddPriority.o(i) < toAddPriority.o(j))) {
                  swap(toAdd, i, j);
                  swap_0(toAddPriority, i, j);
                  swap_0(toAddAfter, i, j);
                }
              }
               while (inductionVariable_0 < last_0);
          }
           while (inductionVariable < last);
        $this.h1b_1.m(toAdd);
      }
    }
  }
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.f1c_1.g18();
  }
  function composeInitial($this, content) {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.i1c_1) {
      // Inline function 'androidx.compose.runtime.CompositionImpl.composeInitial.<anonymous>' call
      var tmp$ret$0 = 'The composition is disposed';
      throwIllegalStateException(tmp$ret$0);
    }
    $this.j1c_1 = content;
    $this.n1b_1.k1c($this, $this.j1c_1);
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.p1b_1.m1c(get_PendingApplyNoModifications());
    if (toRecord != null) {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) {
          addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked_0($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + toString($this.p1b_1));
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.p1b_1.m1c(null);
    if (!equals(toRecord, get_PendingApplyNoModifications())) {
      if (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) {
        addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked_0($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + toString($this.p1b_1));
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked($this, value, forgetConditionalScopes) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.t1b_1.u16_1.l1(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.wt_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.vt_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var tmp = k[index];
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (!$this.z1b_1.o1c(value, scope) && !scope.p1c(value).equals(InvalidationResult_IGNORED_getInstance())) {
                        if (scope.n1c() && !forgetConditionalScopes) {
                          $this.v1b_1.d(scope);
                        } else {
                          $this.u1b_1.d(scope);
                        }
                      }
                    }
                    slot = slot.e2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (!$this.z1b_1.o1c(value, scope_0) && !scope_0.p1c(value).equals(InvalidationResult_IGNORED_getInstance())) {
          if (scope_0.n1c() && !forgetConditionalScopes) {
            $this.v1b_1.d(scope_0);
          } else {
            $this.u1b_1.d(scope_0);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked_0($this, values, forgetConditionalScopes) {
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    var tmp;
    if (values instanceof ScatterSetWrapper) {
      var this_0 = values.q1c_1;
      // Inline function 'kotlin.contracts.contract' call
      var k = this_0.wt_1;
      var tmp$ret$5;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.vt_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                    var tmp_0 = k[index];
                    var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    if (value instanceof RecomposeScopeImpl) {
                      value.p1c(null);
                    } else {
                      addPendingInvalidationsLocked($this, value, forgetConditionalScopes);
                      // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
                      var value_0 = $this.w1b_1.u16_1.l1(value);
                      if (value_0 != null) {
                        if (value_0 instanceof MutableScatterSet) {
                          // Inline function 'androidx.collection.ScatterSet.forEach' call
                          var this_2 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
                          // Inline function 'kotlin.contracts.contract' call
                          var k_0 = this_2.wt_1;
                          $l$block: {
                            // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                            // Inline function 'kotlin.contracts.contract' call
                            var m_0 = this_2.vt_1;
                            var lastIndex_0 = m_0.length - 2 | 0;
                            var inductionVariable_1 = 0;
                            if (inductionVariable_1 <= lastIndex_0)
                              do {
                                var i_0 = inductionVariable_1;
                                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                var slot_0 = m_0[i_0];
                                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                var this_3 = slot_0;
                                if (!this_3.g2(this_3.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                                  var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                  var inductionVariable_2 = 0;
                                  if (inductionVariable_2 < bitCount_0)
                                    do {
                                      var j_0 = inductionVariable_2;
                                      inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                      // Inline function 'androidx.collection.isFull' call
                                      if (slot_0.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                                        var index_0 = (i_0 << 3) + j_0 | 0;
                                        // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                                        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                                        var tmp_1 = k_0[index_0];
                                        var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                                        addPendingInvalidationsLocked($this, it, forgetConditionalScopes);
                                      }
                                      slot_0 = slot_0.e2(8);
                                    }
                                     while (inductionVariable_2 < bitCount_0);
                                  if (!(bitCount_0 === 8)) {
                                    break $l$block;
                                  }
                                }
                              }
                               while (!(i_0 === lastIndex_0));
                          }
                        } else {
                          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                          var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
                          addPendingInvalidationsLocked($this, it_0, forgetConditionalScopes);
                        }
                      }
                    }
                  }
                  slot = slot.e2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                tmp$ret$5 = Unit_instance;
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp = tmp$ret$5;
    } else {
      var tmp0_iterator = values.f();
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        if (element instanceof RecomposeScopeImpl) {
          element.p1c(null);
        } else {
          addPendingInvalidationsLocked($this, element, forgetConditionalScopes);
          // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
          var value_1 = $this.w1b_1.u16_1.l1(element);
          if (value_1 != null) {
            if (value_1 instanceof MutableScatterSet) {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_4 = value_1 instanceof MutableScatterSet ? value_1 : THROW_CCE();
              // Inline function 'kotlin.contracts.contract' call
              var k_1 = this_4.wt_1;
              $l$block_1: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_1 = this_4.vt_1;
                var lastIndex_1 = m_1.length - 2 | 0;
                var inductionVariable_3 = 0;
                if (inductionVariable_3 <= lastIndex_1)
                  do {
                    var i_1 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var slot_1 = m_1[i_1];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_5 = slot_1;
                    if (!this_5.g2(this_5.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_4 = 0;
                      if (inductionVariable_4 < bitCount_1)
                        do {
                          var j_1 = inductionVariable_4;
                          inductionVariable_4 = inductionVariable_4 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_1.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                            var index_1 = (i_1 << 3) + j_1 | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                            var tmp_2 = k_1[index_1];
                            var it_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                            addPendingInvalidationsLocked($this, it_1, forgetConditionalScopes);
                          }
                          slot_1 = slot_1.e2(8);
                        }
                         while (inductionVariable_4 < bitCount_1);
                      if (!(bitCount_1 === 8)) {
                        break $l$block_1;
                      }
                    }
                  }
                   while (!(i_1 === lastIndex_1));
              }
            } else {
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
              var it_2 = !(value_1 == null) ? value_1 : THROW_CCE();
              addPendingInvalidationsLocked($this, it_2, forgetConditionalScopes);
            }
          }
        }
      }
      tmp = Unit_instance;
    }
    var conditionallyInvalidatedScopes = $this.v1b_1;
    var invalidatedScopes = $this.u1b_1;
    if (forgetConditionalScopes && conditionallyInvalidatedScopes.au()) {
      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
      // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
      var this_6 = $this.t1b_1.u16_1;
      $l$block_3: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_2 = this_6.hs_1;
        var lastIndex_2 = m_2.length - 2 | 0;
        var inductionVariable_5 = 0;
        if (inductionVariable_5 <= lastIndex_2)
          do {
            var i_2 = inductionVariable_5;
            inductionVariable_5 = inductionVariable_5 + 1 | 0;
            var slot_2 = m_2[i_2];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_7 = slot_2;
            if (!this_7.g2(this_7.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_2 = 8 - (~(i_2 - lastIndex_2 | 0) >>> 31 | 0) | 0;
              var inductionVariable_6 = 0;
              if (inductionVariable_6 < bitCount_2)
                do {
                  var j_2 = inductionVariable_6;
                  inductionVariable_6 = inductionVariable_6 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_2.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_2 = (i_2 << 3) + j_2 | 0;
                    // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                    var tmp_3 = this_6.is_1[index_2];
                    (tmp_3 == null ? true : !(tmp_3 == null)) || THROW_CCE();
                    var tmp_4 = this_6.js_1[index_2];
                    var value_2 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
                    var tmp_5;
                    if (value_2 instanceof MutableScatterSet) {
                      var set = value_2 instanceof MutableScatterSet ? value_2 : THROW_CCE();
                      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                      var elements = set.wt_1;
                      $l$block_2: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_3 = set.vt_1;
                        var lastIndex_3 = m_3.length - 2 | 0;
                        var inductionVariable_7 = 0;
                        if (inductionVariable_7 <= lastIndex_3)
                          do {
                            var i_3 = inductionVariable_7;
                            inductionVariable_7 = inductionVariable_7 + 1 | 0;
                            var slot_3 = m_3[i_3];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_8 = slot_3;
                            if (!this_8.g2(this_8.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                              var bitCount_3 = 8 - (~(i_3 - lastIndex_3 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_8 = 0;
                              if (inductionVariable_8 < bitCount_3)
                                do {
                                  var j_3 = inductionVariable_8;
                                  inductionVariable_8 = inductionVariable_8 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_3.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                                    var index_3 = (i_3 << 3) + j_3 | 0;
                                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                                    var tmp_6 = elements[index_3];
                                    var scope = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
                                    if (conditionallyInvalidatedScopes.n(scope) || invalidatedScopes.n(scope)) {
                                      set.iv(index_3);
                                    }
                                  }
                                  slot_3 = slot_3.e2(8);
                                }
                                 while (inductionVariable_8 < bitCount_3);
                              if (!(bitCount_3 === 8)) {
                                break $l$block_2;
                              }
                            }
                          }
                           while (!(i_3 === lastIndex_3));
                      }
                      tmp_5 = set.p();
                    } else {
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope_0 = !(value_2 == null) ? value_2 : THROW_CCE();
                      tmp_5 = conditionallyInvalidatedScopes.n(scope_0) || invalidatedScopes.n(scope_0);
                    }
                    if (tmp_5) {
                      this_6.ar(index_2);
                    }
                  }
                  slot_2 = slot_2.e2(8);
                }
                 while (inductionVariable_6 < bitCount_2);
              if (!(bitCount_2 === 8)) {
                break $l$block_3;
              }
            }
          }
           while (!(i_2 === lastIndex_2));
      }
      conditionallyInvalidatedScopes.b1();
      cleanUpDerivedStateObservations($this);
    } else if (invalidatedScopes.au()) {
      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
      // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
      var this_9 = $this.t1b_1.u16_1;
      $l$block_5: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_4 = this_9.hs_1;
        var lastIndex_4 = m_4.length - 2 | 0;
        var inductionVariable_9 = 0;
        if (inductionVariable_9 <= lastIndex_4)
          do {
            var i_4 = inductionVariable_9;
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            var slot_4 = m_4[i_4];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_10 = slot_4;
            if (!this_10.g2(this_10.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_4 = 8 - (~(i_4 - lastIndex_4 | 0) >>> 31 | 0) | 0;
              var inductionVariable_10 = 0;
              if (inductionVariable_10 < bitCount_4)
                do {
                  var j_4 = inductionVariable_10;
                  inductionVariable_10 = inductionVariable_10 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_4.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_4 = (i_4 << 3) + j_4 | 0;
                    // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                    var tmp_7 = this_9.is_1[index_4];
                    (tmp_7 == null ? true : !(tmp_7 == null)) || THROW_CCE();
                    var tmp_8 = this_9.js_1[index_4];
                    var value_3 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
                    var tmp_9;
                    if (value_3 instanceof MutableScatterSet) {
                      var set_0 = value_3 instanceof MutableScatterSet ? value_3 : THROW_CCE();
                      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                      var elements_0 = set_0.wt_1;
                      $l$block_4: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_5 = set_0.vt_1;
                        var lastIndex_5 = m_5.length - 2 | 0;
                        var inductionVariable_11 = 0;
                        if (inductionVariable_11 <= lastIndex_5)
                          do {
                            var i_5 = inductionVariable_11;
                            inductionVariable_11 = inductionVariable_11 + 1 | 0;
                            var slot_5 = m_5[i_5];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_11 = slot_5;
                            if (!this_11.g2(this_11.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                              var bitCount_5 = 8 - (~(i_5 - lastIndex_5 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_12 = 0;
                              if (inductionVariable_12 < bitCount_5)
                                do {
                                  var j_5 = inductionVariable_12;
                                  inductionVariable_12 = inductionVariable_12 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_5.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                                    var index_5 = (i_5 << 3) + j_5 | 0;
                                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                                    var tmp_10 = elements_0[index_5];
                                    var scope_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
                                    if (invalidatedScopes.n(scope_1)) {
                                      set_0.iv(index_5);
                                    }
                                  }
                                  slot_5 = slot_5.e2(8);
                                }
                                 while (inductionVariable_12 < bitCount_5);
                              if (!(bitCount_5 === 8)) {
                                break $l$block_4;
                              }
                            }
                          }
                           while (!(i_5 === lastIndex_5));
                      }
                      tmp_9 = set_0.p();
                    } else {
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope_2 = !(value_3 == null) ? value_3 : THROW_CCE();
                      tmp_9 = invalidatedScopes.n(scope_2);
                    }
                    if (tmp_9) {
                      this_9.ar(index_4);
                    }
                  }
                  slot_4 = slot_4.e2(8);
                }
                 while (inductionVariable_10 < bitCount_4);
              if (!(bitCount_4 === 8)) {
                break $l$block_5;
              }
            }
          }
           while (!(i_4 === lastIndex_4));
      }
      cleanUpDerivedStateObservations($this);
      invalidatedScopes.b1();
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = $this.w1b_1.u16_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.hs_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                  var tmp = this_0.is_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.js_1[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                    var elements = set.wt_1;
                    $l$block: {
                      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                      // Inline function 'kotlin.contracts.contract' call
                      var m_0 = set.vt_1;
                      var lastIndex_0 = m_0.length - 2 | 0;
                      var inductionVariable_1 = 0;
                      if (inductionVariable_1 <= lastIndex_0)
                        do {
                          var i_0 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          var slot_0 = m_0[i_0];
                          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                          var this_2 = slot_0;
                          if (!this_2.g2(this_2.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                            var inductionVariable_2 = 0;
                            if (inductionVariable_2 < bitCount_0)
                              do {
                                var j_0 = inductionVariable_2;
                                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                // Inline function 'androidx.collection.isFull' call
                                if (slot_0.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                                  var index_0 = (i_0 << 3) + j_0 | 0;
                                  // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                  // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                                  var tmp_2 = elements[index_0];
                                  var derivedState = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                                  if (!$this.t1b_1.r1c(derivedState)) {
                                    set.iv(index_0);
                                  }
                                }
                                slot_0 = slot_0.e2(8);
                              }
                               while (inductionVariable_2 < bitCount_0);
                            if (!(bitCount_0 === 8)) {
                              break $l$block;
                            }
                          }
                        }
                         while (!(i_0 === lastIndex_0));
                    }
                    tmp_1 = set.p();
                  } else {
                    // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                    var derivedState_0 = !(value == null) ? value : THROW_CCE();
                    tmp_1 = !$this.t1b_1.r1c(derivedState_0);
                  }
                  if (tmp_1) {
                    this_0.ar(index);
                  }
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i === lastIndex));
    }
    if ($this.v1b_1.au()) {
      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
      var this_3 = $this.v1b_1;
      var elements_0 = this_3.wt_1;
      $l$block_1: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m_1 = this_3.vt_1;
        var lastIndex_1 = m_1.length - 2 | 0;
        var inductionVariable_3 = 0;
        if (inductionVariable_3 <= lastIndex_1)
          do {
            var i_1 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var slot_1 = m_1[i_1];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_4 = slot_1;
            if (!this_4.g2(this_4.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
              var inductionVariable_4 = 0;
              if (inductionVariable_4 < bitCount_1)
                do {
                  var j_1 = inductionVariable_4;
                  inductionVariable_4 = inductionVariable_4 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_1.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_1 = (i_1 << 3) + j_1 | 0;
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                    var tmp_3 = elements_0[index_1];
                    if (!((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()).n1c()) {
                      this_3.iv(index_1);
                    }
                  }
                  slot_1 = slot_1.e2(8);
                }
                 while (inductionVariable_4 < bitCount_1);
              if (!(bitCount_1 === 8)) {
                break $l$block_1;
              }
            }
          }
           while (!(i_1 === lastIndex_1));
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.t1b_1.u16_1.l1(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.wt_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.vt_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
                      var tmp = k[index];
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (scope.p1c(value).equals(InvalidationResult_IMMINENT_getInstance())) {
                        $this.z1b_1.s1c(value, scope);
                      }
                    }
                    slot = slot.e2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (scope_0.p1c(value).equals(InvalidationResult_IMMINENT_getInstance())) {
          $this.z1b_1.s1c(value, scope_0);
        }
      }
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.r1b_1);
    try {
      if (changes.p())
        return Unit_instance;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:applyChanges';
        var token = Trace_instance.o16(sectionName);
        try {
          $this.o1b_1.sv();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var writer = $this.s1b_1.t12();
          var normalClose = false;
          var tmp;
          try {
            // Inline function 'kotlin.also' call
            changes.t1c($this.o1b_1, writer, manager);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
            normalClose = true;
            tmp = Unit_instance;
          }finally {
            writer.y12(normalClose);
          }
          $this.o1b_1.tv();
          break $l$block;
        }finally {
          Trace_instance.b17(token);
        }
      }
      manager.u1c();
      manager.v1c();
      if ($this.b1c_1) {
        $l$block_2: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName_0 = 'Compose:unobserve';
          var token_0 = Trace_instance.o16(sectionName_0);
          try {
            $this.b1c_1 = false;
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
            // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
            var this_0 = $this.t1b_1.u16_1;
            $l$block_1: {
              // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
              var m = this_0.hs_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                          // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                          var tmp_0 = this_0.is_1[index];
                          (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
                          var tmp_1 = this_0.js_1[index];
                          var value = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                          var tmp_2;
                          if (value instanceof MutableScatterSet) {
                            var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                            // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                            var elements = set.wt_1;
                            $l$block_0: {
                              // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                              // Inline function 'kotlin.contracts.contract' call
                              var m_0 = set.vt_1;
                              var lastIndex_0 = m_0.length - 2 | 0;
                              var inductionVariable_1 = 0;
                              if (inductionVariable_1 <= lastIndex_0)
                                do {
                                  var i_0 = inductionVariable_1;
                                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                  var slot_0 = m_0[i_0];
                                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                  var this_2 = slot_0;
                                  if (!this_2.g2(this_2.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                                    var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                    var inductionVariable_2 = 0;
                                    if (inductionVariable_2 < bitCount_0)
                                      do {
                                        var j_0 = inductionVariable_2;
                                        inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                        // Inline function 'androidx.collection.isFull' call
                                        if (slot_0.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                                          var index_0 = (i_0 << 3) + j_0 | 0;
                                          // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                          // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                                          var tmp_3 = elements[index_0];
                                          if (!((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()).q1a()) {
                                            set.iv(index_0);
                                          }
                                        }
                                        slot_0 = slot_0.e2(8);
                                      }
                                       while (inductionVariable_2 < bitCount_0);
                                    if (!(bitCount_0 === 8)) {
                                      break $l$block_0;
                                    }
                                  }
                                }
                                 while (!(i_0 === lastIndex_0));
                            }
                            tmp_2 = set.p();
                          } else {
                            // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                            tmp_2 = !(!(value == null) ? value : THROW_CCE()).q1a();
                          }
                          if (tmp_2) {
                            this_0.ar(index);
                          }
                        }
                        slot = slot.e2(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block_1;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            cleanUpDerivedStateObservations($this);
            break $l$block_2;
          }finally {
            Trace_instance.b17(token_0);
          }
        }
      }
    }finally {
      if ($this.y1b_1.p()) {
        manager.w1c();
      }
    }
  }
  function tryImminentInvalidation($this, scope, instance) {
    return $this.x1c() && $this.f1c_1.m16(scope, instance);
  }
  function invalidateChecked($this, scope, anchor, instance) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.q1b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.c1c_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.s1b_1.y1c($this.d1c_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var delegate = tmp;
    if (delegate == null) {
      if (tryImminentInvalidation($this, scope, instance)) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      var observer_0 = observer($this);
      if (instance == null) {
        $this.a1c_1.z1c(scope, ScopeInvalidated_instance);
      } else {
        var tmp_1;
        if (observer_0 == null) {
          tmp_1 = !(!(instance == null) ? isInterface(instance, DerivedState) : false);
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          $this.a1c_1.z1c(scope, ScopeInvalidated_instance);
        } else {
          var tmp$ret$5;
          $l$block_1: {
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.anyScopeOf' call
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
            var value = $this.a1c_1.u16_1.l1(scope);
            if (value != null) {
              if (value instanceof MutableScatterSet) {
                // Inline function 'androidx.collection.ScatterSet.forEach' call
                var this_0 = value instanceof MutableScatterSet ? value : THROW_CCE();
                // Inline function 'kotlin.contracts.contract' call
                var k = this_0.wt_1;
                $l$block_0: {
                  // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                  // Inline function 'kotlin.contracts.contract' call
                  var m = this_0.vt_1;
                  var lastIndex = m.length - 2 | 0;
                  var inductionVariable = 0;
                  if (inductionVariable <= lastIndex)
                    do {
                      var i = inductionVariable;
                      inductionVariable = inductionVariable + 1 | 0;
                      var slot = m[i];
                      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                      var this_1 = slot;
                      if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                        var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                        var inductionVariable_0 = 0;
                        if (inductionVariable_0 < bitCount)
                          do {
                            var j = inductionVariable_0;
                            inductionVariable_0 = inductionVariable_0 + 1 | 0;
                            // Inline function 'androidx.collection.isFull' call
                            if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                              var index = (i << 3) + j | 0;
                              // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                              // Inline function 'androidx.compose.runtime.collection.ScopeMap.anyScopeOf.<anonymous>' call
                              var tmp_2 = k[index];
                              // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
                              if (((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()) === ScopeInvalidated_instance) {
                                tmp$ret$5 = true;
                                break $l$block_1;
                              }
                            }
                            slot = slot.e2(8);
                          }
                           while (inductionVariable_0 < bitCount);
                        if (!(bitCount === 8)) {
                          break $l$block_0;
                        }
                      }
                    }
                     while (!(i === lastIndex));
                }
              } else {
                // Inline function 'androidx.compose.runtime.collection.ScopeMap.anyScopeOf.<anonymous>' call
                // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
                if ((!(value == null) ? value : THROW_CCE()) === ScopeInvalidated_instance) {
                  tmp$ret$5 = true;
                  break $l$block_1;
                }
              }
            }
            tmp$ret$5 = false;
          }
          if (!tmp$ret$5) {
            $this.a1c_1.s1c(scope, instance);
          }
        }
      }
    }
    var delegate_0 = delegate;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.n1b_1.a1d($this);
    return $this.x1c() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.a1c_1;
    $this.a1c_1 = new ScopeMap();
    return invalidations;
  }
  function observer($this) {
    var holder = $this.e1c_1;
    var tmp;
    if (holder.d1d_1) {
      tmp = holder.c1d_1;
    } else {
      var parentHolder = $this.n1b_1.b1d();
      var parentObserver = parentHolder == null ? null : parentHolder.c1d_1;
      if (!equals(parentObserver, holder.c1d_1)) {
        holder.c1d_1 = parentObserver;
      }
      tmp = parentObserver;
    }
    return tmp;
  }
  function RememberEventDispatcher(abandoning) {
    this.f1b_1 = abandoning;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.g1b_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.h1b_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.i1b_1 = ArrayList_init_$Create$();
    this.j1b_1 = null;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.k1b_1 = ArrayList_init_$Create$();
    this.l1b_1 = new MutableIntList();
    this.m1b_1 = new MutableIntList();
  }
  protoOf(RememberEventDispatcher).e1d = function (instance) {
    this.g1b_1.d(instance);
  };
  protoOf(RememberEventDispatcher).r1a = function (instance, endRelativeOrder, priority, endRelativeAfter) {
    recordLeaving(this, instance, endRelativeOrder, priority, endRelativeAfter);
  };
  protoOf(RememberEventDispatcher).o1a = function (instance, endRelativeOrder, priority, endRelativeAfter) {
    var tmp0_elvis_lhs = this.j1b_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.j1b_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var releasing = tmp;
    releasing.mv(instance);
    recordLeaving(this, instance, endRelativeOrder, priority, endRelativeAfter);
  };
  protoOf(RememberEventDispatcher).u1c = function () {
    processPendingLeaving(this, -2147483648);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.h1b_1.p()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:onForgotten';
        var token = Trace_instance.o16(sectionName);
        try {
          var releasing = this.j1b_1;
          var inductionVariable = this.h1b_1.i() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = this.h1b_1.o(i);
              if (isInterface(instance, RememberObserver)) {
                this.f1b_1.a1(instance);
                instance.f1d();
              }
              if (isInterface(instance, ComposeNodeLifecycleCallback)) {
                if (!(releasing == null) && releasing.n(instance)) {
                  instance.yw();
                } else {
                  instance.xw();
                }
              }
            }
             while (0 <= inductionVariable);
          break $l$block;
        }finally {
          Trace_instance.b17(token);
        }
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.g1b_1.p()) {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Compose:onRemembered';
        var token_0 = Trace_instance.o16(sectionName_0);
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.g1b_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_0 = 0;
          var last = this_0.i() - 1 | 0;
          if (inductionVariable_0 <= last)
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item = this_0.o(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.f1b_1.a1(item);
              item.g1d();
            }
             while (inductionVariable_0 <= last);
          break $l$block_0;
        }finally {
          Trace_instance.b17(token_0);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).v1c = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.i1b_1.p()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:sideeffects';
        var token = Trace_instance.o16(sectionName);
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.i1b_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.i() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.o(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.i1b_1.b1();
          break $l$block;
        }finally {
          Trace_instance.b17(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).w1c = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.f1b_1.p()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:abandons';
        var token = Trace_instance.o16(sectionName);
        try {
          var iterator = this.f1b_1.f();
          while (iterator.g()) {
            var instance = iterator.h();
            iterator.u2();
            instance.h1d();
          }
          break $l$block;
        }finally {
          Trace_instance.b17(token);
        }
      }
    }
  };
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.n1b_1 = parent;
    this.o1b_1 = applier;
    this.p1b_1 = new AtomicReference(null);
    this.q1b_1 = new Object();
    this.r1b_1 = (new MutableScatterSet()).qv();
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new SlotTable();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.slotTable.<anonymous>' call
    if (this.n1b_1.x12()) {
      this_0.w12();
    }
    if (this.n1b_1.xz()) {
      this_0.v12();
    }
    tmp.s1b_1 = this_0;
    this.t1b_1 = new ScopeMap();
    this.u1b_1 = new MutableScatterSet();
    this.v1b_1 = new MutableScatterSet();
    this.w1b_1 = new ScopeMap();
    this.x1b_1 = new ChangeList();
    this.y1b_1 = new ChangeList();
    this.z1b_1 = new ScopeMap();
    this.a1c_1 = new ScopeMap();
    this.b1c_1 = false;
    this.c1c_1 = null;
    this.d1c_1 = 0;
    this.e1c_1 = new CompositionObserverHolder();
    var tmp_0 = this;
    // Inline function 'kotlin.also' call
    var this_1 = new ComposerImpl(this.o1b_1, this.n1b_1, this.s1b_1, this.r1b_1, this.x1b_1, this.y1b_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.n1b_1.i1d(this_1);
    tmp_0.f1c_1 = this_1;
    this.g1c_1 = recomposeContext;
    var tmp_1 = this;
    var tmp_2 = this.n1b_1;
    tmp_1.h1c_1 = tmp_2 instanceof Recomposer;
    this.i1c_1 = false;
    this.j1c_1 = ComposableSingletons$CompositionKt_getInstance().j1d_1;
  }
  protoOf(CompositionImpl).x1c = function () {
    return this.f1c_1.ry_1;
  };
  protoOf(CompositionImpl).l1d = function () {
    return this.i1c_1;
  };
  protoOf(CompositionImpl).m1d = function (content) {
    composeInitial(this, content);
  };
  protoOf(CompositionImpl).n1d = function (content) {
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        this.q1b_1;
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>.<anonymous>' call
        drainPendingModificationsForCompositionLocked(this);
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>.<anonymous>.<anonymous>' call
          var observer_0 = observer(this);
          if (!(observer_0 == null)) {
            var tmp_2 = invalidations.o1d();
            observer_0.p1d(this, isInterface(tmp_2, KtMap) ? tmp_2 : THROW_CCE());
          }
          this.f1c_1.e1a(invalidations, content);
          var tmp_3;
          if (observer_0 == null) {
            tmp_3 = null;
          } else {
            observer_0.q1d(this);
            tmp_3 = Unit_instance;
          }
          tmp_1 = tmp_3;
        } catch ($p) {
          var tmp_4;
          if ($p instanceof Exception) {
            var e = $p;
            this.a1c_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_5;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_5 = !this.r1b_1.p();
        } else {
          tmp_5 = false;
        }
        if (tmp_5) {
          (new RememberEventDispatcher(this.r1b_1)).w1c();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_6;
      if ($p instanceof Exception) {
        var e_0 = $p;
        this.r1d();
        throw e_0;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).s1d = function (values) {
    $l$loop: while (true) {
      var old = this.p1b_1.xi();
      var tmp;
      if (old == null ? true : equals(old, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(old == null) ? isInterface(old, KtSet) : false) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = [old, values];
        } else {
          if (!(old == null) ? isArray(old) : false) {
            tmp = plus_0((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var message = 'corrupt pendingModifications: ' + toString(this.p1b_1);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
      var new_0 = tmp;
      if (this.p1b_1.t1d(old, new_0)) {
        if (old == null) {
          // Inline function 'androidx.compose.runtime.synchronized' call
          this.q1b_1;
          drainPendingModificationsLocked(this);
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).u1d = function (values) {
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    var tmp;
    if (values instanceof ScatterSetWrapper) {
      var this_0 = values.q1c_1;
      // Inline function 'kotlin.contracts.contract' call
      var k = this_0.wt_1;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.vt_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.CompositionImpl.observesAnyOf.<anonymous>' call
                    var tmp_0 = k[index];
                    var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    if (this.t1b_1.r1c(value) || this.w1b_1.r1c(value))
                      return true;
                  }
                  slot = slot.e2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                tmp$ret$2 = Unit_instance;
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp = tmp$ret$2;
    } else {
      var tmp0_iterator = values.f();
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        // Inline function 'androidx.compose.runtime.CompositionImpl.observesAnyOf.<anonymous>' call
        if (this.t1b_1.r1c(element) || this.w1b_1.r1c(element))
          return true;
      }
      tmp = Unit_instance;
    }
    return false;
  };
  protoOf(CompositionImpl).v1d = function (block) {
    return this.f1c_1.g1a(block);
  };
  protoOf(CompositionImpl).w1d = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.f1c_1.q18();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.m1a(true);
        var alreadyRead = tmp0_safe_receiver.x1d(value);
        if (!alreadyRead) {
          if (value instanceof StateObjectImpl) {
            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
            var tmp$ret$0 = _ReaderKind___init__impl__jqeebu(1);
            value.z1d(tmp$ret$0);
          }
          this.t1b_1.s1c(value, tmp0_safe_receiver);
          if (isInterface(value, DerivedState)) {
            var record = value.a1e();
            this.w1b_1.b1e(value);
            // Inline function 'androidx.collection.ObjectIntMap.forEachKey' call
            var this_0 = record.c1e();
            var k = this_0.nr_1;
            $l$block: {
              // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
              var m = this_0.mr_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.ObjectIntMap.forEachKey.<anonymous>' call
                          // Inline function 'androidx.compose.runtime.CompositionImpl.recordReadOf.<anonymous>.<anonymous>' call
                          var tmp = k[index];
                          var dependency = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                          if (dependency instanceof StateObjectImpl) {
                            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                            var tmp$ret$3 = _ReaderKind___init__impl__jqeebu(1);
                            dependency.z1d(tmp$ret$3);
                          }
                          this.w1b_1.s1c(dependency, value);
                        }
                        slot = slot.e2(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            tmp0_safe_receiver.e1e(value, record.d1e());
          }
        }
      }
    }
  };
  protoOf(CompositionImpl).f1e = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.q1b_1;
    invalidateScopeOfLocked(this, value);
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = this.w1b_1.u16_1.l1(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.wt_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.vt_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
                      var tmp = k[index];
                      var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      invalidateScopeOfLocked(this, it);
                    }
                    slot = slot.e2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
        var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        invalidateScopeOfLocked(this, it_0);
      }
    }
    return Unit_instance;
  };
  protoOf(CompositionImpl).g1e = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.q1b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          var observer_0 = observer(this);
          if (observer_0 == null)
            null;
          else {
            var tmp_2 = invalidations.o1d();
            observer_0.p1d(this, isInterface(tmp_2, KtMap) ? tmp_2 : THROW_CCE());
          }
          // Inline function 'kotlin.also' call
          var this_0 = this.f1c_1.h1a(invalidations);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!this_0) {
            drainPendingModificationsLocked(this);
          }
          if (observer_0 == null)
            null;
          else {
            observer_0.q1d(this);
          }
          tmp_1 = this_0;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Exception) {
            var e = $p;
            this.a1c_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_4;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_4 = !this.r1b_1.p();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          (new RememberEventDispatcher(this.r1b_1)).w1c();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof Exception) {
        var e_0 = $p;
        this.r1d();
        throw e_0;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(CompositionImpl).h1e = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.o(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          if (!equals(item.zc_1.x15_1, this)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.f1c_1.x19(references);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.r1b_1.p();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.r1b_1)).w1c();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        this.r1d();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).i1e = function (state) {
    var manager = new RememberEventDispatcher(this.r1b_1);
    var slotTable = state.f16_1;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.t12();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'kotlin.also' call
      removeCurrentGroup(writer, manager);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = Unit_instance;
    }finally {
      writer.y12(normalClose);
    }
    manager.u1c();
  };
  protoOf(CompositionImpl).j1e = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.q1b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        applyChangesInLocked(this, this.x1b_1);
        drainPendingModificationsLocked(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.r1b_1.p();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.r1b_1)).w1c();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        this.r1d();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).k1e = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.q1b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        if (this.y1b_1.au()) {
          applyChangesInLocked(this, this.y1b_1);
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.r1b_1.p();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.r1b_1)).w1c();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        this.r1d();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).l1e = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.q1b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.f1c_1.o18();
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.r1b_1.p()) {
          (new RememberEventDispatcher(this.r1b_1)).w1c();
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.r1b_1.p();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.r1b_1)).w1c();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        this.r1d();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).r1d = function () {
    this.p1b_1.m1e(null);
    this.x1b_1.b1();
    this.y1b_1.b1();
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.r1b_1.p()) {
      (new RememberEventDispatcher(this.r1b_1)).w1c();
    }
  };
  protoOf(CompositionImpl).n1e = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.q1b_1;
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.s1b_1.gz_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.o1e();
      }
    }
  };
  protoOf(CompositionImpl).n16 = function (to, groupIndex, block) {
    var tmp;
    if (!(to == null) && !equals(to, this) && groupIndex >= 0) {
      var tmp_0 = this;
      tmp_0.c1c_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.d1c_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.c1c_1 = null;
        this.d1c_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).p1e = function (scope, instance) {
    if (scope.q1e()) {
      scope.v19(true);
    }
    var anchor = scope.fx_1;
    if (anchor == null || !anchor.q1a())
      return InvalidationResult_IGNORED_getInstance();
    if (!this.s1b_1.r1e(anchor)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.q1b_1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidate.<anonymous>' call
      var delegate = this.c1c_1;
      if ((delegate == null ? null : tryImminentInvalidation(delegate, scope, instance)) === true)
        return InvalidationResult_IMMINENT_getInstance();
      return InvalidationResult_IGNORED_getInstance();
    }
    if (!scope.s1e())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).t1e = function (scope) {
    this.b1c_1 = true;
  };
  protoOf(CompositionImpl).u1e = function (instance, scope) {
    this.t1b_1.o1c(instance, scope);
  };
  protoOf(CompositionImpl).v1e = function (state) {
    if (!this.t1b_1.r1c(state)) {
      this.w1b_1.b1e(state);
    }
  };
  function CompositionObserverHolder(observer, root) {
    observer = observer === VOID ? null : observer;
    root = root === VOID ? false : root;
    this.c1d_1 = observer;
    this.d1d_1 = root;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.c18(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 3) === 2) || !$composer_0.e18()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:623)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.u12();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.c18(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 3) === 2) || !$composer_0.e18()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:757)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.u12();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.j1d_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.k1d_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function ScopeInvalidated() {
  }
  var ScopeInvalidated_instance;
  function ScopeInvalidated_getInstance() {
    return ScopeInvalidated_instance;
  }
  function swap(_this__u8e3s4, a, b) {
    _init_properties_Composition_kt__t5pjw8();
    var item = _this__u8e3s4.o(a);
    _this__u8e3s4.c1(a, _this__u8e3s4.o(b));
    _this__u8e3s4.c1(b, item);
  }
  function swap_0(_this__u8e3s4, a, b) {
    _init_properties_Composition_kt__t5pjw8();
    var item = _this__u8e3s4.o(a);
    _this__u8e3s4.mq(a, _this__u8e3s4.o(b));
    _this__u8e3s4.mq(b, item);
  }
  function ControlledComposition(applier, parent) {
    _init_properties_Composition_kt__t5pjw8();
    return new CompositionImpl(parent, applier);
  }
  function CompositionImplServiceKey$1() {
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function _init_properties_Composition_kt__t5pjw8() {
    if (!properties_initialized_Composition_kt_u7hvq2) {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
      CompositionImplServiceKey = new CompositionImplServiceKey$1();
    }
  }
  function get_EmptyPersistentCompositionLocalMap() {
    _init_properties_CompositionContext_kt__4g1p1h();
    return EmptyPersistentCompositionLocalMap;
  }
  var EmptyPersistentCompositionLocalMap;
  function CompositionContext() {
  }
  protoOf(CompositionContext).b1d = function () {
    return null;
  };
  protoOf(CompositionContext).yz = function (table) {
  };
  protoOf(CompositionContext).i1d = function (composer) {
  };
  protoOf(CompositionContext).rz = function () {
    return get_EmptyPersistentCompositionLocalMap();
  };
  protoOf(CompositionContext).qz = function () {
  };
  protoOf(CompositionContext).a10 = function () {
  };
  protoOf(CompositionContext).e16 = function (reference) {
    return null;
  };
  var properties_initialized_CompositionContext_kt_mk393b;
  function _init_properties_CompositionContext_kt__4g1p1h() {
    if (!properties_initialized_CompositionContext_kt_mk393b) {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyPersistentCompositionLocalMap = persistentCompositionLocalHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.x1e_1 = new LazyValueHolder(defaultFactory);
  }
  protoOf(CompositionLocal).y1e = function () {
    return this.x1e_1;
  };
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
  }
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  function PersistentCompositionLocalMap() {
  }
  function read(_this__u8e3s4, key) {
    // Inline function 'kotlin.collections.getOrElse' call
    var key_0 = key instanceof CompositionLocal ? key : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    var tmp0_elvis_lhs = _this__u8e3s4.l1(key_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.read.<anonymous>' call
      tmp = key.y1e();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp_0 = tmp.z1e(_this__u8e3s4);
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    _init_properties_DerivedState_kt__eqt0x8();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  function derivedStateObservers_0() {
    _init_properties_DerivedState_kt__eqt0x8();
    var tmp0_elvis_lhs = get_derivedStateObservers().xi();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp$ret$0 = fillArrayVal(Array(0), null);
      var this_0 = new MutableVector(tmp$ret$0, 0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.derivedStateObservers.<anonymous>' call
      get_derivedStateObservers().d1f(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function _init_properties_DerivedState_kt__eqt0x8() {
    if (!properties_initialized_DerivedState_kt_scch8q) {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  function get_InternalDisposableEffectScope() {
    _init_properties_Effects_kt__be5lps();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectScope() {
  }
  function LaunchedEffect(key1, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1179185413, 'C(LaunchedEffect)P(1)338@14267L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1179185413, $changed, -1, 'androidx.compose.runtime.LaunchedEffect (Effects.kt:336)');
    }
    var applyContext = $composer_0.h18();
    sourceInformationMarkerStart($composer_0, 2064962644, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.vz(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.j1a();
    var tmp;
    if (invalid || it === Companion_getInstance().d13_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_0.k1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function CompositionScopedCoroutineScopeCanceller(coroutineScope) {
    this.e1f_1 = coroutineScope;
  }
  protoOf(CompositionScopedCoroutineScopeCanceller).g1d = function () {
  };
  protoOf(CompositionScopedCoroutineScopeCanceller).f1d = function () {
    cancel(this.e1f_1, new LeftCompositionCancellationException());
  };
  protoOf(CompositionScopedCoroutineScopeCanceller).h1d = function () {
    cancel(this.e1f_1, new LeftCompositionCancellationException());
  };
  function createCompositionCoroutineScope(coroutineContext, composer) {
    _init_properties_Effects_kt__be5lps();
    var tmp;
    if (!(coroutineContext.e8(Key_instance) == null)) {
      // Inline function 'kotlin.apply' call
      var this_0 = Job();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.createCompositionCoroutineScope.<anonymous>' call
      this_0.lm(IllegalArgumentException_init_$Create$('CoroutineContext supplied to rememberCoroutineScope may not include a parent job'));
      tmp = CoroutineScope(this_0);
    } else {
      var applyContext = composer.h18();
      tmp = CoroutineScope(applyContext.ac(Job(applyContext.e8(Key_instance))).ac(coroutineContext));
    }
    return tmp;
  }
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.f1f_1 = task;
    this.g1f_1 = CoroutineScope(parentCoroutineContext);
    this.h1f_1 = null;
  }
  protoOf(LaunchedEffectImpl).g1d = function () {
    var tmp0_safe_receiver = this.h1f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel_0(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.h1f_1 = launch(this.g1f_1, VOID, VOID, this.f1f_1);
  };
  protoOf(LaunchedEffectImpl).f1d = function () {
    var tmp0_safe_receiver = this.h1f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.we(new LeftCompositionCancellationException());
    }
    this.h1f_1 = null;
  };
  protoOf(LaunchedEffectImpl).h1d = function () {
    var tmp0_safe_receiver = this.h1f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.we(new LeftCompositionCancellationException());
    }
    this.h1f_1 = null;
  };
  function LeftCompositionCancellationException() {
    PlatformOptimizedCancellationException.call(this, 'The coroutine scope left the composition');
    captureStack(this, LeftCompositionCancellationException);
  }
  function DisposableEffect(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1371986847, 'C(DisposableEffect)P(1)155@6197L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1371986847, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:154)');
    }
    sourceInformationMarkerStart($composer_0, 1176203671, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.vz(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.j1a();
    var tmp;
    if (invalid || it === Companion_getInstance().d13_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_0.k1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function DisposableEffectImpl(effect) {
    this.i1f_1 = effect;
    this.j1f_1 = null;
  }
  protoOf(DisposableEffectImpl).g1d = function () {
    this.j1f_1 = this.i1f_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).f1d = function () {
    var tmp0_safe_receiver = this.j1f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.lh();
    }
    this.j1f_1 = null;
  };
  protoOf(DisposableEffectImpl).h1d = function () {
  };
  var properties_initialized_Effects_kt_cj8kem;
  function _init_properties_Effects_kt__be5lps() {
    if (!properties_initialized_Effects_kt_cj8kem) {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.p1_1;
    } else {
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.k1f_1 = left;
    this.l1f_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.k1f_1), 31) + hashCodeOf(this, this.l1f_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.k1f_1) + ', right=' + toString_0(this.l1f_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.k1f_1, tmp0_other_with_cast.k1f_1))
      return false;
    if (!equals(this.l1f_1, tmp0_other_with_cast.l1f_1))
      return false;
    return true;
  };
  function Key() {
  }
  var Key_instance_0;
  function Key_getInstance() {
    return Key_instance_0;
  }
  function MonotonicFrameClock() {
  }
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.e8(Key_instance_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function OpaqueKey(key) {
    this.m1f_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.m1f_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.m1f_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.m1f_1 === tmp0_other_with_cast.m1f_1))
      return false;
    return true;
  };
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  var callbackLock;
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.dx_1 = $this.dx_1 | 32;
    } else {
      $this.dx_1 = $this.dx_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.dx_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.dx_1 = $this.dx_1 | 16;
    } else {
      $this.dx_1 = $this.dx_1 & -17;
    }
  }
  function checkDerivedStateChanged(_this__u8e3s4, $this, dependencies) {
    if (!isInterface(_this__u8e3s4, DerivedState))
      THROW_CCE();
    var tmp0_elvis_lhs = _this__u8e3s4.a1f();
    var policy = tmp0_elvis_lhs == null ? structuralEqualityPolicy() : tmp0_elvis_lhs;
    return !policy.n1f(_this__u8e3s4.a1e().d1e(), dependencies.l1(_this__u8e3s4));
  }
  function Companion_1() {
  }
  protoOf(Companion_1).o1f = function (slots, anchors, newOwner) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.p()) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = anchors.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = anchors.o(index);
          // Inline function 'androidx.compose.runtime.Companion.adoptAnchoredScopes.<anonymous>' call
          var tmp = slots.p1f(item, 0);
          var recomposeScope = tmp instanceof RecomposeScopeImpl ? tmp : null;
          if (recomposeScope == null)
            null;
          else {
            recomposeScope.q1f(newOwner);
          }
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Companion_1).r1f = function (slots, anchors) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.p()) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.Companion.hasAnchoredRecomposeScopes.<anonymous>' call
            var tmp_0;
            if (slots.r1e(item)) {
              var tmp_1 = slots.s1f(slots.c16(item), 0);
              tmp_0 = tmp_1 instanceof RecomposeScopeImpl;
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$2 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $instances) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.ix_1 === $token && $instances.equals(this$0.jx_1)) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var this_0 = $instances;
        var tmp$ret$3;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
          var m = this_0.mr_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.MutableObjectIntMap.removeIf.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
                      var tmp_1 = this_0.nr_1[index];
                      var instance = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                      var shouldRemove = !(this_0.or_1[index] === $token);
                      if (shouldRemove) {
                        composition.u1e(instance, this$0);
                        if (isInterface(instance, DerivedState)) {
                          composition.v1e(instance);
                          var tmp0_safe_receiver = this$0.kx_1;
                          if (tmp0_safe_receiver == null)
                            null;
                          else
                            tmp0_safe_receiver.u3(instance);
                        }
                      }
                      if (shouldRemove) {
                        this_0.yr(index);
                      }
                    }
                    slot = slot.e2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  tmp$ret$3 = Unit_instance;
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
        tmp = tmp$ret$3;
      }
      return Unit_instance;
    };
  }
  function RecomposeScopeImpl(owner) {
    this.dx_1 = 0;
    this.ex_1 = owner;
    this.fx_1 = null;
    this.gx_1 = null;
    this.hx_1 = null;
    this.ix_1 = 0;
    this.jx_1 = null;
    this.kx_1 = null;
  }
  protoOf(RecomposeScopeImpl).q1a = function () {
    var tmp;
    if (!(this.ex_1 == null)) {
      var tmp0_safe_receiver = this.fx_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q1a();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).s1e = function () {
    return !(this.gx_1 == null);
  };
  protoOf(RecomposeScopeImpl).m1a = function (value) {
    if (value) {
      this.dx_1 = this.dx_1 | 1;
    } else {
      this.dx_1 = this.dx_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).i14 = function () {
    return !((this.dx_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).q1e = function () {
    return !((this.dx_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).v19 = function (value) {
    if (value) {
      this.dx_1 = this.dx_1 | 4;
    } else {
      this.dx_1 = this.dx_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).o15 = function (value) {
    if (value) {
      this.dx_1 = this.dx_1 | 8;
    } else {
      this.dx_1 = this.dx_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).r18 = function () {
    return !((this.dx_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).e15 = function (composer) {
    var block = this.gx_1;
    var observer = this.hx_1;
    if (!(observer == null) && !(block == null)) {
      observer.t1f(this);
      try {
        block(composer, 1);
      }finally {
        observer.u1f(this);
      }
      return Unit_instance;
    }
    if ((block == null ? null : block(composer, 1)) == null) {
      // Inline function 'kotlin.error' call
      var message = 'Invalid restart scope';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(RecomposeScopeImpl).p1c = function (value) {
    var tmp0_safe_receiver = this.ex_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p1e(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).s1a = function () {
    var tmp0_safe_receiver = this.ex_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1e(this);
    }
    this.ex_1 = null;
    this.jx_1 = null;
    this.kx_1 = null;
    var tmp1_safe_receiver = this.hx_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.v1f(this);
    }
  };
  protoOf(RecomposeScopeImpl).q1f = function (owner) {
    this.ex_1 = owner;
  };
  protoOf(RecomposeScopeImpl).o1e = function () {
    var tmp0_safe_receiver = this.ex_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.p1e(this, null);
  };
  protoOf(RecomposeScopeImpl).w1f = function (block) {
    this.gx_1 = block;
  };
  protoOf(RecomposeScopeImpl).n15 = function (value) {
    if (value) {
      this.dx_1 = this.dx_1 | 64;
    } else {
      this.dx_1 = this.dx_1 & -65;
    }
  };
  protoOf(RecomposeScopeImpl).m15 = function () {
    return !((this.dx_1 & 64) === 0);
  };
  protoOf(RecomposeScopeImpl).w19 = function () {
    return !((this.dx_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).p15 = function (token) {
    this.ix_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).q19 = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).x1d = function (instance) {
    if (_get_rereading__g2iruw(this))
      return false;
    var tmp0_elvis_lhs = this.jx_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableObjectIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.jx_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedInstances = tmp;
    var token = trackedInstances.xr(instance, this.ix_1, -1);
    if (token === this.ix_1) {
      return true;
    }
    return false;
  };
  protoOf(RecomposeScopeImpl).e1e = function (instance, value) {
    var tmp0_elvis_lhs = this.kx_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableScatterMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordDerivedStateValue.<anonymous>' call
      this.kx_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    trackedDependencies.ss(instance, value);
  };
  protoOf(RecomposeScopeImpl).n1c = function () {
    return !(this.kx_1 == null);
  };
  protoOf(RecomposeScopeImpl).lx = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.kx_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (isInterface(instances, DerivedState)) {
      tmp_0 = checkDerivedStateChanged(instances, this, trackedDependencies);
    } else {
      if (instances instanceof ScatterSet) {
        var tmp_1;
        if (instances.au()) {
          var tmp$ret$3;
          $l$block: {
            // Inline function 'androidx.collection.ScatterSet.any' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.collection.ScatterSet.forEach' call
            // Inline function 'kotlin.contracts.contract' call
            var k = instances.wt_1;
            $l$block_0: {
              // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
              // Inline function 'kotlin.contracts.contract' call
              var m = instances.vt_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_0 = slot;
                  if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                          // Inline function 'androidx.collection.ScatterSet.any.<anonymous>' call
                          var tmp_2 = k[index];
                          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
                          var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                          var tmp_3;
                          if (!(!(it == null) ? isInterface(it, DerivedState) : false)) {
                            tmp_3 = true;
                          } else {
                            tmp_3 = checkDerivedStateChanged(it, this, trackedDependencies);
                          }
                          if (tmp_3) {
                            tmp$ret$3 = true;
                            break $l$block;
                          }
                        }
                        slot = slot.e2(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block_0;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            tmp$ret$3 = false;
          }
          tmp_1 = tmp$ret$3;
        } else {
          tmp_1 = false;
        }
        tmp_0 = tmp_1;
      } else {
        tmp_0 = true;
      }
    }
    return tmp_0;
  };
  protoOf(RecomposeScopeImpl).d15 = function () {
    var tmp0_safe_receiver = this.ex_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.jx_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _set_rereading__pnqtpo(this, true);
        try {
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver_0.nr_1;
          var v = tmp0_safe_receiver_0.or_1;
          $l$block: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver_0.mr_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
                        var tmp_0 = k[index];
                        var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                        v[index];
                        tmp0_safe_receiver.w1d(value);
                      }
                      slot = slot.e2(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block;
                  }
                }
              }
               while (!(i === lastIndex));
          }
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp = Unit_instance;
      }
    }
  };
  protoOf(RecomposeScopeImpl).t19 = function (token) {
    var tmp0_safe_receiver = this.jx_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.w19()) {
        var tmp$ret$3;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.any' call
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver.nr_1;
          var v = tmp0_safe_receiver.or_1;
          $l$block_0: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver.mr_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                        // Inline function 'androidx.collection.ObjectIntMap.any.<anonymous>' call
                        var tmp_2 = k[index];
                        (tmp_2 == null ? true : !(tmp_2 == null)) || THROW_CCE();
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
                        if (!(v[index] === token)) {
                          tmp$ret$3 = true;
                          break $l$block;
                        }
                      }
                      slot = slot.e2(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block_0;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp$ret$3 = false;
        }
        tmp_1 = tmp$ret$3;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function RecomposeScopeOwner() {
  }
  function updateChangedFlags(flags) {
    _init_properties_RecomposeScopeImpl_kt__t15emj();
    var lowBits = flags & 306783378;
    var highBits = flags & 613566756;
    return flags & -920350135 | (lowBits | highBits >> 1) | lowBits << 1 & highBits;
  }
  var properties_initialized_RecomposeScopeImpl_kt_pxgdx3;
  function _init_properties_RecomposeScopeImpl_kt__t15emj() {
    if (!properties_initialized_RecomposeScopeImpl_kt_pxgdx3) {
      properties_initialized_RecomposeScopeImpl_kt_pxgdx3 = true;
      callbackLock = new Object();
    }
  }
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_instance;
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.x1f_1.i1();
      var new_0 = old.d(info);
      if (old === new_0 || $this.x1f_1.nn(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.x1f_1.i1();
      var new_0 = old.a1(info);
      if (old === new_0 || $this.x1f_1.nn(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(this$0, toRecompose, toInsert, toApply, toLateApply, toComplete, modifiedValues, alreadyComposed) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.b1g_1;
    toRecompose.b1();
    toInsert.b1();
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = toApply.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = toApply.o(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
        item.r1d();
        recordFailedCompositionLocked(this$0, item);
      }
       while (inductionVariable <= last);
    toApply.b1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = toLateApply.wt_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = toLateApply.vt_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= lastIndex)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_1 = 0;
            if (inductionVariable_1 < bitCount)
              do {
                var j = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index_0 = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
                  var tmp = k[index_0];
                  var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  it.r1d();
                  recordFailedCompositionLocked(this$0, it);
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_1 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    toLateApply.b1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k_0 = toComplete.wt_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m_0 = toComplete.vt_1;
      var lastIndex_0 = m_0.length - 2 | 0;
      var inductionVariable_2 = 0;
      if (inductionVariable_2 <= lastIndex_0)
        do {
          var i_0 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var slot_0 = m_0[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot_0;
          if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
            var inductionVariable_3 = 0;
            if (inductionVariable_3 < bitCount_0)
              do {
                var j_0 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot_0.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index_1 = (i_0 << 3) + j_0 | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
                  var tmp_0 = k_0[index_1];
                  ((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).l1e();
                }
                slot_0 = slot_0.e2(8);
              }
               while (inductionVariable_3 < bitCount_0);
            if (!(bitCount_0 === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i_0 === lastIndex_0));
    }
    toComplete.b1();
    modifiedValues.b1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k_1 = alreadyComposed.wt_1;
    $l$block_1: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m_1 = alreadyComposed.vt_1;
      var lastIndex_1 = m_1.length - 2 | 0;
      var inductionVariable_4 = 0;
      if (inductionVariable_4 <= lastIndex_1)
        do {
          var i_1 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var slot_1 = m_1[i_1];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_2 = slot_1;
          if (!this_2.g2(this_2.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
            var inductionVariable_5 = 0;
            if (inductionVariable_5 < bitCount_1)
              do {
                var j_1 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot_1.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index_2 = (i_1 << 3) + j_1 | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
                  var tmp_1 = k_1[index_2];
                  var it_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                  it_0.r1d();
                  recordFailedCompositionLocked(this$0, it_0);
                }
                slot_1 = slot_1.e2(8);
              }
               while (inductionVariable_5 < bitCount_1);
            if (!(bitCount_1 === 8)) {
              break $l$block_1;
            }
          }
        }
         while (!(i_1 === lastIndex_1));
    }
    alreadyComposed.b1();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.b1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.b1g_1;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = this$0.j1g_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.d(item);
      }
       while (inductionVariable <= last);
    this$0.j1g_1.b1();
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $modifiedValues, $alreadyComposed, $toInsert, $toApply, $modifiedValuesSet, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (_get_hasBroadcastFrameClockAwaiters__y6inql(this$0)) {
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName = 'Recomposer:animation';
          var token = Trace_instance.o16(sectionName);
          try {
            this$0.a1g_1.uw(frameTime);
            Companion_instance_11.y1g();
            break $l$block;
          }finally {
            Trace_instance.b17(token);
          }
        }
        tmp = Unit_instance;
      }
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Recomposer:recompose';
        var token_0 = Trace_instance.o16(sectionName_0);
        try {
          recordComposerModifications(this$0);
          // Inline function 'androidx.compose.runtime.synchronized' call
          this$0.b1g_1;
          // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
          var this_0 = this$0.h1g_1;
          // Inline function 'kotlin.contracts.contract' call
          var size = this_0.y16_1;
          if (size > 0) {
            var i = 0;
            var tmp_0 = this_0.w16_1;
            var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
            do {
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var it = content[i];
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.d(it);
              i = i + 1 | 0;
            }
             while (i < size);
          }
          this$0.h1g_1.b1();
          $modifiedValues.b1();
          $alreadyComposed.b1();
          $l$loop: while (true) {
            var tmp_1;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!$toRecompose.p()) {
              tmp_1 = true;
            } else {
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp_1 = !$toInsert.p();
            }
            if (!tmp_1) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_1 = $toRecompose;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable = 0;
              var last = this_1.i() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_1.o(index);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  var tmp0_safe_receiver = performRecompose(this$0, item, $modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    $toApply.d(tmp0_safe_receiver);
                  }
                  $alreadyComposed.d(item);
                }
                 while (inductionVariable <= last);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e = $p;
                processCompositionError$default(this$0, e, VOID, true);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.b1();
            }
            if ($modifiedValues.au() || this$0.h1g_1.au()) {
              // Inline function 'androidx.compose.runtime.synchronized' call
              this$0.b1g_1;
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_2 = _get_knownCompositions__y8veaj(this$0);
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = this_2.i() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_2.o(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!$alreadyComposed.n(item_0) && item_0.u1d($modifiedValuesSet)) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.d(item_0);
                  }
                }
                 while (inductionVariable_0 <= last_0);
              var this_3 = this$0.h1g_1;
              var gap = 0;
              var size_0 = this_3.y16_1;
              var inductionVariable_1 = 0;
              if (inductionVariable_1 < size_0)
                $l$loop_0: do {
                  var i_0 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  var tmp_2 = this_3.w16_1[i_0];
                  var value = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                  var tmp_3;
                  if (!$alreadyComposed.n(value) && !$toRecompose.n(value)) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.d(value);
                    tmp_3 = true;
                  } else {
                    tmp_3 = false;
                  }
                  if (tmp_3) {
                    gap = gap + 1 | 0;
                    continue $l$loop_0;
                  }
                  if (gap > 0) {
                    this_3.w16_1[i_0 - gap | 0] = this_3.w16_1[i_0];
                  }
                }
                 while (inductionVariable_1 < size_0);
              fill_0(this_3.w16_1, null, size_0 - gap | 0, size_0);
              this_3.z1g(size_0 - gap | 0);
            }
            if ($toRecompose.p()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_1: while (true) {
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  if (!!$toInsert.p()) {
                    break $l$loop_1;
                  }
                  $toLateApply.nv(performInsertValues(this$0, $toInsert, $modifiedValues));
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e_0 = $p;
                  processCompositionError$default(this$0, e_0, VOID, true);
                  invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                  return Unit_instance;
                } else {
                  throw $p;
                }
              }
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toApply.p()) {
            var tmp0_this = this$0;
            tmp0_this.z1f_1 = tmp0_this.z1f_1.a2();
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_4 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_1 = this_4.i() - 1 | 0;
              if (inductionVariable_2 <= last_1)
                do {
                  var index_1 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_1 = this_4.o(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $toComplete.d(item_1);
                }
                 while (inductionVariable_2 <= last_1);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_5 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_3 = 0;
              var last_2 = this_5.i() - 1 | 0;
              if (inductionVariable_3 <= last_2)
                do {
                  var index_2 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var item_2 = this_5.o(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_2.j1e();
                }
                 while (inductionVariable_3 <= last_2);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_1 = $p;
                processCompositionError$default(this$0, e_1);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.b1();
            }
          }
          if ($toLateApply.au()) {
            try {
              $toComplete.pv($toLateApply);
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_6 = $toLateApply;
              // Inline function 'kotlin.contracts.contract' call
              var k = this_6.wt_1;
              $l$block_0: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m = this_6.vt_1;
                var lastIndex = m.length - 2 | 0;
                var inductionVariable_4 = 0;
                if (inductionVariable_4 <= lastIndex)
                  do {
                    var i_1 = inductionVariable_4;
                    inductionVariable_4 = inductionVariable_4 + 1 | 0;
                    var slot = m[i_1];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_7 = slot;
                    if (!this_7.g2(this_7.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount = 8 - (~(i_1 - lastIndex | 0) >>> 31 | 0) | 0;
                      var inductionVariable_5 = 0;
                      if (inductionVariable_5 < bitCount)
                        do {
                          var j = inductionVariable_5;
                          inductionVariable_5 = inductionVariable_5 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                            var index_3 = (i_1 << 3) + j | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                            var tmp_4 = k[index_3];
                            ((tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE()).k1e();
                          }
                          slot = slot.e2(8);
                        }
                         while (inductionVariable_5 < bitCount);
                      if (!(bitCount === 8)) {
                        break $l$block_0;
                      }
                    }
                  }
                   while (!(i_1 === lastIndex));
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_2 = $p;
                processCompositionError$default(this$0, e_2);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.b1();
            }
          }
          if ($toComplete.au()) {
            try {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_8 = $toComplete;
              // Inline function 'kotlin.contracts.contract' call
              var k_0 = this_8.wt_1;
              $l$block_1: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_0 = this_8.vt_1;
                var lastIndex_0 = m_0.length - 2 | 0;
                var inductionVariable_6 = 0;
                if (inductionVariable_6 <= lastIndex_0)
                  do {
                    var i_2 = inductionVariable_6;
                    inductionVariable_6 = inductionVariable_6 + 1 | 0;
                    var slot_0 = m_0[i_2];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_9 = slot_0;
                    if (!this_9.g2(this_9.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount_0 = 8 - (~(i_2 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_7 = 0;
                      if (inductionVariable_7 < bitCount_0)
                        do {
                          var j_0 = inductionVariable_7;
                          inductionVariable_7 = inductionVariable_7 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_0.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                            var index_4 = (i_2 << 3) + j_0 | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                            var tmp_5 = k_0[index_4];
                            ((tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE()).l1e();
                          }
                          slot_0 = slot_0.e2(8);
                        }
                         while (inductionVariable_7 < bitCount_0);
                      if (!(bitCount_0 === 8)) {
                        break $l$block_1;
                      }
                    }
                  }
                   while (!(i_2 === lastIndex_0));
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_3 = $p;
                processCompositionError$default(this$0, e_3);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.b1();
            }
          }
          // Inline function 'androidx.compose.runtime.synchronized' call
          this$0.b1g_1;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          deriveStateLocked(this$0);
          Companion_instance_11.a1h();
          $alreadyComposed.b1();
          $modifiedValues.b1();
          this$0.n1g_1 = null;
          break $l$block_2;
        }finally {
          Trace_instance.b17(token_0);
        }
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.b1g_1;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.t1g_1.i1().q1(State_Idle_getInstance()) >= 0) {
        var snapshotInvalidations = this$0.g1g_1;
        // Inline function 'androidx.compose.runtime.collection.fastForEach' call
        var tmp_0;
        if (changed instanceof ScatterSetWrapper) {
          var this_0 = changed.q1c_1;
          // Inline function 'kotlin.contracts.contract' call
          var k = this_0.wt_1;
          var tmp$ret$4;
          $l$block_0: {
            // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
            // Inline function 'kotlin.contracts.contract' call
            var m = this_0.vt_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_1 = slot;
                if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                        $l$block: {
                          // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                          var tmp_1 = k[index];
                          var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                          var tmp_2;
                          if (it instanceof StateObjectImpl) {
                            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                            var tmp$ret$2 = _ReaderKind___init__impl__jqeebu(1);
                            tmp_2 = !it.b1h(tmp$ret$2);
                          } else {
                            tmp_2 = false;
                          }
                          if (tmp_2) {
                            break $l$block;
                          }
                          snapshotInvalidations.d(it);
                        }
                      }
                      slot = slot.e2(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    tmp$ret$4 = Unit_instance;
                    break $l$block_0;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp_0 = tmp$ret$4;
        } else {
          var tmp0_iterator = changed.f();
          while (tmp0_iterator.g()) {
            var element = tmp0_iterator.h();
            $l$block_1: {
              // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_3;
              if (element instanceof StateObjectImpl) {
                // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                var tmp$ret$5 = _ReaderKind___init__impl__jqeebu(1);
                tmp_3 = !element.b1h(tmp$ret$5);
              } else {
                tmp_3 = false;
              }
              if (tmp_3) {
                break $l$block_1;
              }
              snapshotInvalidations.d(element);
            }
          }
          tmp_0 = Unit_instance;
        }
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      var tmp0_safe_receiver = tmp;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$10 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.c8(tmp$ret$10);
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.k1h_1 = $block;
    this.l1h_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).n1h = function ($this$coroutineScope, $completion) {
    var tmp = this.o1h($this$coroutineScope, $completion);
    tmp.t7_1 = Unit_instance;
    tmp.u7_1 = null;
    return tmp.z7();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).n8 = function (p1, $completion) {
    return this.n1h((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).z7 = function () {
    var suspendResult = this.t7_1;
    $sm: do
      try {
        var tmp = this.r7_1;
        switch (tmp) {
          case 0:
            this.s7_1 = 2;
            this.r7_1 = 1;
            suspendResult = this.k1h_1(this.m1h_1, this.l1h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.u7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s7_1 === 2) {
          throw e;
        } else {
          this.r7_1 = this.s7_1;
          this.u7_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).o1h = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.k1h_1, this.l1h_1, completion);
    i.m1h_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.n1h($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_knownCompositions__y8veaj($this) {
    var tmp0_elvis_lhs = $this.f1g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.<get-knownCompositions>.<anonymous>' call
      var compositions = $this.e1g_1;
      var newCache = compositions.p() ? emptyList() : ArrayList_init_$Create$_1(compositions);
      $this.f1g_1 = newCache;
      tmp = newCache;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) {
    return !$this.s1g_1 && $this.a1g_1.tw();
  }
  function _get_hasBroadcastFrameClockAwaiters__y6inql($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.b1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasBroadcastFrameClockAwaiters>.<anonymous>' call
    return _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function deriveStateLocked($this) {
    if ($this.t1g_1.i1().q1(State_ShuttingDown_getInstance()) <= 0) {
      clearKnownCompositionsLocked($this);
      $this.g1g_1 = new MutableScatterSet();
      $this.h1g_1.b1();
      $this.i1g_1.b1();
      $this.j1g_1.b1();
      $this.m1g_1 = null;
      var tmp0_safe_receiver = $this.o1g_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.bg();
      $this.o1g_1 = null;
      $this.r1g_1 = null;
      return null;
    }
    var tmp;
    if (!($this.r1g_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.c1g_1 == null) {
        $this.g1g_1 = new MutableScatterSet();
        $this.h1g_1.b1();
        tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        if ($this.h1g_1.au() || $this.g1g_1.au()) {
          tmp_3 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !$this.i1g_1.p();
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !$this.j1g_1.p();
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.p1g_1 > 0;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
        }
        if (tmp_0) {
          tmp = State_PendingWork_getInstance();
        } else {
          tmp = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp;
    $this.t1g_1.mn(newState);
    var tmp_4;
    if (newState.equals(State_PendingWork_getInstance())) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.o1g_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.o1g_1 = null;
      tmp_4 = this_0;
    } else {
      tmp_4 = null;
    }
    return tmp_4;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.b1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    if (!$this.q1g_1) {
      tmp = true;
    } else {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp0_iterator = $this.u1g_1.ql().f();
        while (tmp0_iterator.g()) {
          var element = tmp0_iterator.h();
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          if (element.rd()) {
            tmp$ret$3 = true;
            break $l$block;
          }
        }
        tmp$ret$3 = false;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.p1h_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.q1h_1 = recoverable;
    this.r1h_1 = cause;
  }
  function recordComposerModifications($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.b1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if ($this.g1g_1.p())
      return _get_hasFrameWorkLocked__1gtyf7($this);
    // Inline function 'kotlin.also' call
    var this_0 = wrapIntoSet($this.g1g_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
    $this.g1g_1 = new MutableScatterSet();
    var changes = this_0;
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.b1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    var compositions = _get_knownCompositions__y8veaj($this);
    var complete = false;
    try {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      $l$block: {
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = compositions.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = compositions.o(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
            item.s1d(changes);
            if ($this.t1g_1.i1().q1(State_ShuttingDown_getInstance()) <= 0) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.b1g_1;
      $this.g1g_1 = new MutableScatterSet();
      complete = true;
    }finally {
      if (!complete) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        $this.b1g_1;
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        $this.g1g_1.lv(changes);
      }
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.b1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if (!(deriveStateLocked($this) == null)) {
      // Inline function 'kotlin.error' call
      var message = 'called outside of runRecomposeAndApplyChanges';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_hasFrameWorkLocked__1gtyf7($this);
  }
  function registerRunnerJob($this, callingJob) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.b1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.d1g_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.t1g_1.i1().q1(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      var message = 'Recomposer shut down';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!($this.c1g_1 == null)) {
      // Inline function 'kotlin.error' call
      var message_0 = 'Recomposer already running';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    $this.c1g_1 = callingJob;
    deriveStateLocked($this);
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_2().y1f_1.xi()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.b1g_1;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.i1g_1.b1();
      $this.h1g_1.b1();
      $this.g1g_1 = new MutableScatterSet();
      $this.j1g_1.b1();
      $this.k1g_1.b1();
      $this.l1g_1.b1();
      $this.r1g_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        recordFailedCompositionLocked($this, failedInitialComposition);
      }
      deriveStateLocked($this);
    } else {
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.b1g_1;
      var errorState = $this.r1g_1;
      if (errorState == null) {
        $this.r1g_1 = new RecomposerErrorState(false, e);
      } else {
        throw errorState.r1h_1;
      }
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $super) {
    failedInitialComposition = failedInitialComposition === VOID ? null : failedInitialComposition;
    recoverable = recoverable === VOID ? false : recoverable;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function clearKnownCompositionsLocked($this) {
    $this.e1g_1.b1();
    $this.f1g_1 = emptyList();
  }
  function removeKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.minusAssign' call
    $this.e1g_1.a1(composition);
    $this.f1g_1 = null;
  }
  function addKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.plusAssign' call
    $this.e1g_1.d(composition);
    $this.f1g_1 = null;
  }
  function recordFailedCompositionLocked($this, composition) {
    var tmp0_elvis_lhs = $this.m1g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.recordFailedCompositionLocked.<anonymous>' call
      $this.m1g_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var failedCompositions = tmp;
    if (!failedCompositions.n(composition)) {
      // Inline function 'kotlin.collections.plusAssign' call
      failedCompositions.d(composition);
    }
    removeKnownCompositionLocked($this, composition);
  }
  function _get_hasSchedulingWork__b617oy($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.b1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    return $this.g1g_1.au() || $this.h1g_1.au() || _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$1($this, $completion);
    tmp.t7_1 = Unit_instance;
    tmp.u7_1 = null;
    return tmp.z7();
  }
  function recompositionRunner($this, block, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.x7();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.a1g_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
  }
  function performInitialMovableContentInserts($this, composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.b1g_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_0 = $this.j1g_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.o(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          if (equals(item.x15_1, composition)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1)
      return Unit_instance;
    // Inline function 'kotlin.collections.mutableListOf' call
    var toInsert = ArrayList_init_$Create$();
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!toInsert.p()) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    var tmp;
    if (composition.x1c() || composition.l1d()) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.n1g_1;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n(composition)) === true;
    }
    if (tmp)
      return null;
    var tmp_0;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_instance_11.b1i(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.c1i();
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            if ((modifiedValues == null ? null : modifiedValues.au()) === true) {
              composition.v1d(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$1 = composition.g1e();
            break $l$block;
          }finally {
            snapshot.d1i(previous);
          }
        }
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$1) {
      tmp_0 = composition;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function performInsertValues($this, references, modifiedValues) {
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$(references.i());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.o(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        var key = item.x15_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.l1(key);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          var answer = ArrayList_init_$Create$();
          destination.t3(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.d(item);
      }
       while (inductionVariable <= last);
    var tasks = destination;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tasks.n1().f();
    while (tmp0_iterator.g()) {
      var tmp1_loop_parameter = tmp0_iterator.h();
      // Inline function 'kotlin.collections.component1' call
      var composition = tmp1_loop_parameter.h1();
      // Inline function 'kotlin.collections.component2' call
      var refs = tmp1_loop_parameter.i1();
      runtimeCheck(!composition.x1c());
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_11.b1i(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          $l$block_1: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.c1i();
            try {
              // Inline function 'androidx.compose.runtime.synchronized' call
              $this.b1g_1;
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.i());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.i() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.o(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  var element = to(item_0, removeLastMultiValue($this.k1g_1, item_0.v15_1));
                  target.d(element);
                }
                 while (inductionVariable_0 <= last_0);
              var pairs = target;
              var tmp_0;
              var tmp_1;
              var tmp$ret$12;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_1 = 0;
                var last_1 = pairs.i() - 1 | 0;
                if (inductionVariable_1 <= last_1)
                  do {
                    var index_1 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var item_1 = pairs.o(index_1);
                    // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                    if (!(item_1.ad_1 == null)) {
                      tmp$ret$12 = false;
                      break $l$block;
                    }
                  }
                   while (inductionVariable_1 <= last_1);
                tmp$ret$12 = true;
              }
              if (tmp$ret$12) {
                tmp_1 = true;
              } else {
                var tmp$ret$14;
                $l$block_0: {
                  // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                  // Inline function 'kotlin.contracts.contract' call
                  var inductionVariable_2 = 0;
                  var last_2 = pairs.i() - 1 | 0;
                  if (inductionVariable_2 <= last_2)
                    do {
                      var index_2 = inductionVariable_2;
                      inductionVariable_2 = inductionVariable_2 + 1 | 0;
                      var item_2 = pairs.o(index_2);
                      // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                      if (!!(item_2.ad_1 == null)) {
                        tmp$ret$14 = false;
                        break $l$block_0;
                      }
                    }
                     while (inductionVariable_2 <= last_2);
                  tmp$ret$14 = true;
                }
                tmp_1 = tmp$ret$14;
              }
              if (tmp_1) {
                tmp_0 = pairs;
              } else {
                // Inline function 'androidx.compose.runtime.snapshots.fastMapNotNull' call
                // Inline function 'kotlin.contracts.contract' call
                var target_0 = ArrayList_init_$Create$_0(pairs.i());
                // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_3 = 0;
                var last_3 = pairs.i() - 1 | 0;
                if (inductionVariable_3 <= last_3)
                  do {
                    var index_3 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var item_3 = pairs.o(index_3);
                    // Inline function 'androidx.compose.runtime.snapshots.fastMapNotNull.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                    var tmp0_safe_receiver = item_3.ad_1 == null ? item_3.zc_1 : null;
                    if (tmp0_safe_receiver == null)
                      null;
                    else {
                      // Inline function 'kotlin.let' call
                      // Inline function 'kotlin.contracts.contract' call
                      target_0.d(tmp0_safe_receiver);
                    }
                  }
                   while (inductionVariable_3 <= last_3);
                var toReturn = target_0;
                // Inline function 'androidx.compose.runtime.synchronized' call
                $this.b1g_1;
                var this_0 = $this.j1g_1;
                addAll(this_0, toReturn);
                // Inline function 'androidx.compose.runtime.snapshots.fastFilterIndexed' call
                // Inline function 'kotlin.contracts.contract' call
                var target_1 = ArrayList_init_$Create$_0(pairs.i());
                // Inline function 'androidx.compose.runtime.snapshots.fastForEachIndexed' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_4 = 0;
                var last_4 = pairs.i() - 1 | 0;
                if (inductionVariable_4 <= last_4)
                  do {
                    var index_4 = inductionVariable_4;
                    inductionVariable_4 = inductionVariable_4 + 1 | 0;
                    var item_4 = pairs.o(index_4);
                    // Inline function 'androidx.compose.runtime.snapshots.fastFilterIndexed.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                    if (!(item_4.ad_1 == null)) {
                      // Inline function 'kotlin.collections.plusAssign' call
                      target_1.d(item_4);
                    }
                  }
                   while (inductionVariable_4 <= last_4);
                tmp_0 = target_1;
              }
              var toInsert = tmp_0;
              composition.h1e(toInsert);
              break $l$block_1;
            }finally {
              snapshot.d1i(previous);
            }
          }
          break $l$block_2;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.m1());
  }
  function discardUnusedValues($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.b1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.k1g_1.p()) {
      var references = flatten($this.k1g_1.s3());
      $this.k1g_1.b1();
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.i());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.o(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          var element = to(item, $this.l1g_1.l1(item));
          target.d(element);
        }
         while (inductionVariable <= last);
      var unusedValues = target;
      $this.l1g_1.b1();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    var unusedValues_0 = tmp;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.i() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.o(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.bd();
        var state = item_0.cd();
        if (!(state == null)) {
          reference.x15_1.i1e(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.r1i();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var message = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }finally {
      snapshot.lh();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    return $this.h1g_1.au() || _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.x1f_1 = MutableStateFlow(persistentSetOf());
    this.y1f_1 = new AtomicReference(false);
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.b1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.b1g_1;
    var iterator = this$0.j1g_1.f();
    while (iterator.g()) {
      var value = iterator.h();
      if (equals(value.x15_1, $composition)) {
        toInsert.d(value);
        iterator.u2();
      }
    }
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.b1g_1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.t1g_1.i1().q1(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.d1g_1);
      if (this_0 == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        this_0.c8(tmp$ret$3);
      }
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.b1g_1;
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1;
        if (runnerJobCause == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_2;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!(runnerJobCause instanceof CancellationException)) {
            tmp_2 = runnerJobCause;
          } else {
            tmp_2 = null;
          }
          tmp_1 = tmp_2;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
        }
        tmp_0 = tmp0_safe_receiver;
      }
      tmp.d1g_1 = tmp_0;
      this$0.t1g_1.mn(State_ShutDown_getInstance());
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.b1g_1;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.c1g_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.t1g_1.mn(State_ShuttingDown_getInstance());
        if (!this$0.q1g_1) {
          runnerJob.we(cancellation);
        } else if (!(this$0.o1g_1 == null)) {
          continuationToResume = this$0.o1g_1;
        }
        this$0.o1g_1 = null;
        tmp = runnerJob.re(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.d1g_1 = cancellation;
        this$0.t1g_1.mn(State_ShutDown_getInstance());
        tmp = Unit_instance;
      }
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.c8(tmp$ret$2);
      }
      return Unit_instance;
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.a1j_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).l1j = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.m1j($this$recompositionRunner, parentFrameClock, $completion);
    tmp.t7_1 = Unit_instance;
    tmp.u7_1 = null;
    return tmp.z7();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).n1j = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.l1j(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).z7 = function () {
    var suspendResult = this.t7_1;
    $sm: do
      try {
        var tmp = this.r7_1;
        switch (tmp) {
          case 0:
            this.s7_1 = 6;
            var tmp_0 = this;
            tmp_0.d1j_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.e1j_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.f1j_1 = ArrayList_init_$Create$();
            this.g1j_1 = mutableScatterSetOf_0();
            this.h1j_1 = mutableScatterSetOf_0();
            this.i1j_1 = new MutableScatterSet();
            this.j1j_1 = wrapIntoSet(this.i1j_1);
            this.k1j_1 = mutableScatterSetOf_0();
            this.r7_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.a1j_1)) {
              this.r7_1 = 5;
              continue $sm;
            }

            this.r7_1 = 2;
            suspendResult = awaitWorkAvailable(this.a1j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!recordComposerModifications(this.a1j_1)) {
              this.r7_1 = 1;
              continue $sm;
            } else {
              this.r7_1 = 3;
              continue $sm;
            }

          case 3:
            this.r7_1 = 4;
            suspendResult = this.c1j_1.vw(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.a1j_1, this.d1j_1, this.i1j_1, this.k1j_1, this.e1j_1, this.f1j_1, this.j1j_1, this.g1j_1, this.h1j_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.a1j_1);
            this.r7_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.u7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s7_1 === 6) {
          throw e;
        } else {
          this.r7_1 = this.s7_1;
          this.u7_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).m1j = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.a1j_1, completion);
    i.b1j_1 = $this$recompositionRunner;
    i.c1j_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.l1j($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.w1j_1 = this$0;
    this.x1j_1 = $block;
    this.y1j_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).n1h = function ($this$withContext, $completion) {
    var tmp = this.o1h($this$withContext, $completion);
    tmp.t7_1 = Unit_instance;
    tmp.u7_1 = null;
    return tmp.z7();
  };
  protoOf(Recomposer$recompositionRunner$slambda).n8 = function (p1, $completion) {
    return this.n1h((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).z7 = function () {
    var suspendResult = this.t7_1;
    $sm: do
      try {
        var tmp = this.r7_1;
        switch (tmp) {
          case 0:
            this.s7_1 = 5;
            this.a1k_1 = get_job(this.z1j_1.qd());
            registerRunnerJob(this.w1j_1, this.a1k_1);
            var tmp_0 = this;
            var tmp_1 = Companion_instance_11;
            tmp_0.b1k_1 = tmp_1.d1k(Recomposer$recompositionRunner$slambda$lambda(this.w1j_1));
            addRunning(Companion_getInstance_2(), this.w1j_1.w1g_1);
            this.r7_1 = 1;
            continue $sm;
          case 1:
            this.s7_1 = 4;
            this.w1j_1.b1g_1;
            var this_0 = _get_knownCompositions__y8veaj(this.w1j_1);
            var inductionVariable = 0;
            var last = this_0.i() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.o(index);
                item.n1e();
              }
               while (inductionVariable <= last);
            this.r7_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.x1j_1, this.y1j_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.c1k_1 = suspendResult;
            this.s7_1 = 5;
            this.r7_1 = 3;
            continue $sm;
          case 3:
            this.s7_1 = 5;
            this.b1k_1.lh();
            this.w1j_1.b1g_1;
            if (this.w1j_1.c1g_1 === this.a1k_1) {
              this.w1j_1.c1g_1 = null;
            }

            deriveStateLocked(this.w1j_1);
            removeRunning(Companion_getInstance_2(), this.w1j_1.w1g_1);
            return Unit_instance;
          case 4:
            this.s7_1 = 5;
            var t = this.u7_1;
            this.b1k_1.lh();
            this.w1j_1.b1g_1;
            if (this.w1j_1.c1g_1 === this.a1k_1) {
              this.w1j_1.c1g_1 = null;
            }

            deriveStateLocked(this.w1j_1);
            removeRunning(Companion_getInstance_2(), this.w1j_1.w1g_1);
            throw t;
          case 5:
            throw this.u7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s7_1 === 5) {
          throw e;
        } else {
          this.r7_1 = this.s7_1;
          this.u7_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda).o1h = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.w1j_1, this.x1j_1, this.y1j_1, completion);
    i.z1j_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.n1h($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      var this_0 = $modifiedValues;
      // Inline function 'kotlin.contracts.contract' call
      var k = this_0.wt_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.vt_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
                    var tmp = k[index];
                    var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    $composition.f1e(it);
                  }
                  slot = slot.e2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      return Unit_instance;
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.w1d(value);
      return Unit_instance;
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.f1e(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.d(value);
      return Unit_instance;
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1i_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$1).z7 = function () {
    var suspendResult = this.t7_1;
    $sm: do
      try {
        var tmp = this.r7_1;
        switch (tmp) {
          case 0:
            this.s7_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.a1i_1)) {
              this.r7_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
              cancellable.kh();
              this.a1i_1.b1g_1;
              var tmp_0;
              if (_get_hasSchedulingWork__b617oy(this.a1i_1)) {
                tmp_0 = cancellable;
              } else {
                this.a1i_1.o1g_1 = cancellable;
                tmp_0 = null;
              }
              var tmp0_safe_receiver = tmp_0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.c8(_Result___init__impl__xyqfz8(Unit_instance));
              }
              suspendResult = returnIfSuspended(cancellable.of(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.r7_1 = 2;
              continue $sm;
            }

          case 1:
            this.r7_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.u7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s7_1 === 3) {
          throw e;
        } else {
          this.r7_1 = this.s7_1;
          this.u7_1 = e;
        }
      }
     while (true);
  };
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_2();
    CompositionContext.call(this);
    this.z1f_1 = new Long(0, 0);
    var tmp = this;
    tmp.a1g_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.b1g_1 = new Object();
    this.c1g_1 = null;
    this.d1g_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.e1g_1 = ArrayList_init_$Create$();
    this.f1g_1 = null;
    this.g1g_1 = new MutableScatterSet();
    var tmp_1 = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$1 = fillArrayVal(Array(16), null);
    tmp_1.h1g_1 = new MutableVector(tmp$ret$1, 0);
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.i1g_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.j1g_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.k1g_1 = LinkedHashMap_init_$Create$();
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.l1g_1 = LinkedHashMap_init_$Create$();
    this.m1g_1 = null;
    this.n1g_1 = null;
    this.o1g_1 = null;
    this.p1g_1 = 0;
    this.q1g_1 = false;
    this.r1g_1 = null;
    this.s1g_1 = false;
    this.t1g_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = Job(effectCoroutineContext.e8(Key_instance));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    this_0.re(Recomposer$effectJob$lambda(this));
    tmp_6.u1g_1 = this_0;
    this.v1g_1 = effectCoroutineContext.ac(this.a1g_1).ac(this.u1g_1);
    this.w1g_1 = new RecomposerInfoImpl(this);
  }
  protoOf(Recomposer).i18 = function () {
    return this.v1g_1;
  };
  protoOf(Recomposer).e1k = function ($completion) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
  };
  protoOf(Recomposer).k1c = function (composition, content) {
    var composerWasComposing = composition.x1c();
    try {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_11.b1i(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.c1i();
            try {
              composition.n1d(content);
              break $l$block;
            }finally {
              snapshot.d1i(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        processCompositionError(this, e, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_11.a1h();
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.b1g_1;
    if (this.t1g_1.i1().q1(State_ShuttingDown_getInstance()) > 0) {
      if (!_get_knownCompositions__y8veaj(this).n(composition)) {
        addKnownCompositionLocked(this, composition);
      }
    }
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        processCompositionError(this, e_0, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    try {
      composition.j1e();
      composition.k1e();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_1 = $p;
        processCompositionError$default(this, e_1);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_11.a1h();
    }
  };
  protoOf(Recomposer).zz = function () {
    return 1000;
  };
  protoOf(Recomposer).x12 = function () {
    return Companion_getInstance_2().y1f_1.xi();
  };
  protoOf(Recomposer).wz = function () {
    return false;
  };
  protoOf(Recomposer).xz = function () {
    return false;
  };
  protoOf(Recomposer).yz = function (table) {
  };
  protoOf(Recomposer).a1d = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.b1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.h1g_1.db(composition)) {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.plusAssign' call
      this.h1g_1.z16(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.c8(tmp$ret$2);
    }
  };
  protoOf(Recomposer).s15 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.b1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.j1g_1.d(reference);
    var tmp0_safe_receiver = deriveStateLocked(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.c8(tmp$ret$2);
    }
  };
  protoOf(Recomposer).w17 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.b1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    addMultiValue(this.k1g_1, reference.v15_1, reference);
  };
  protoOf(Recomposer).w1e = function (reference, data) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.b1g_1;
    this.l1g_1.t3(reference, data);
  };
  protoOf(Recomposer).v17 = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.b1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>' call
    var tmp0_elvis_lhs = this.n1g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableSetOf' call
      var this_0 = LinkedHashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>.<anonymous>' call
      this.n1g_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var compositionsRemoved = tmp;
    compositionsRemoved.d(composition);
  };
  protoOf(Recomposer).e16 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.b1g_1;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    return this.l1g_1.u3(reference);
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.l1(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = removeFirst(tmp0_safe_receiver);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.p()) {
        _this__u8e3s4.u3(key);
      }
      tmp = this_0;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.l1(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      _this__u8e3s4.t3(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.d(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function _init_properties_Recomposer_kt__nj7w3x() {
    if (!properties_initialized_Recomposer_kt_k8q2ph) {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  function tryAnchor($this, index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.kz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.tryAnchor.<anonymous>' call
      var tmp$ret$0 = 'use active SlotWriter to crate an anchor for location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    return (0 <= index ? index < $this.fz_1 : false) ? find($this.mz_1, index, $this.fz_1) : null;
  }
  function SlotTable() {
    this.ez_1 = new Int32Array(0);
    this.fz_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(0), null);
    while (tmp_0 < 0) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.gz_1 = tmp_1;
    this.hz_1 = 0;
    this.iz_1 = 0;
    this.jz_1 = new Object();
    this.kz_1 = false;
    this.lz_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_2.mz_1 = ArrayList_init_$Create$();
    this.nz_1 = null;
    this.oz_1 = null;
  }
  protoOf(SlotTable).b15 = function () {
    return this.fz_1 === 0;
  };
  protoOf(SlotTable).pz = function () {
    if (this.kz_1) {
      // Inline function 'kotlin.error' call
      var message = 'Cannot read while a writer is pending';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.iz_1 = this.iz_1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).t12 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.kz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var tmp$ret$0 = 'Cannot start a writer when another writer is pending';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.iz_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var tmp$ret$1 = 'Cannot start a writer when a reader is pending';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    this.kz_1 = true;
    this.lz_1 = this.lz_1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).n12 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.kz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var tmp$ret$0 = 'use active SlotWriter to create an anchor location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.fz_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var tmp$ret$1 = 'Parameter index is out of range';
      throwIllegalArgumentException(tmp$ret$1);
    }
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.mz_1;
    var effectiveSize = this.fz_1;
    var location = search$accessor$n8vbwb(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.d1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.o(location);
    }
    return tmp;
  };
  protoOf(SlotTable).c16 = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.kz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var tmp$ret$0 = 'Use active SlotWriter to determine anchor location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!anchor.q1a()) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var tmp$ret$1 = 'Anchor refers to a group that was removed';
      throwIllegalArgumentException(tmp$ret$1);
    }
    return anchor.v16_1;
  };
  protoOf(SlotTable).r1e = function (anchor) {
    var tmp;
    if (anchor.q1a()) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      var it = search$accessor$n8vbwb(this.mz_1, anchor.v16_1, this.fz_1);
      tmp = (it >= 0 && equals(this.mz_1.o(it), anchor));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).y1c = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.kz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var tmp$ret$0 = 'Writer is active';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= groupIndex ? groupIndex < this.fz_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var tmp$ret$1 = 'Invalid group index';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    var tmp;
    if (this.r1e(anchor)) {
      var containsUpper = groupIndex + groupSize(this.ez_1, groupIndex) | 0;
      var containsArg = anchor.v16_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).f1k = function (reader, sourceInformationMap) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(reader.o10_1 === this && this.iz_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var tmp$ret$0 = 'Unexpected reader close()';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.iz_1 = this.iz_1 - 1 | 0;
    if (!(sourceInformationMap == null)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.jz_1;
      var thisMap = this.nz_1;
      if (!(thisMap == null)) {
        thisMap.k4(sourceInformationMap);
      } else {
        this.nz_1 = sourceInformationMap;
      }
    }
  };
  protoOf(SlotTable).g1k = function (writer, groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(writer.i11_1 === this && this.kz_1)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var tmp$ret$0 = 'Unexpected writer close()';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.kz_1 = false;
    this.h1k(groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap);
  };
  protoOf(SlotTable).h1k = function (groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap) {
    this.ez_1 = groups;
    this.fz_1 = groupsSize;
    this.gz_1 = slots;
    this.hz_1 = slotsSize;
    this.mz_1 = anchors;
    this.nz_1 = sourceInformationMap;
    this.oz_1 = calledByMap;
  };
  protoOf(SlotTable).h17 = function () {
    return this.fz_1 > 0 && containsMark(this.ez_1, 0);
  };
  protoOf(SlotTable).i1k = function (group) {
    var tmp0_safe_receiver = this.nz_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = tryAnchor(this, group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.l1(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SlotTable).w12 = function () {
    this.oz_1 = new MutableIntObjectMap();
  };
  protoOf(SlotTable).v12 = function () {
    this.nz_1 = HashMap_init_$Create$_0();
  };
  protoOf(SlotTable).s1f = function (group, slotIndex) {
    var start = slotAnchor(this.ez_1, group);
    var end = (group + 1 | 0) < this.fz_1 ? dataAnchor(this.ez_1, group + 1 | 0) : this.gz_1.length;
    var len = end - start | 0;
    var tmp;
    if (0 <= slotIndex ? slotIndex < len : false) {
      return this.gz_1[start + slotIndex | 0];
    } else {
      tmp = Companion_getInstance().d13_1;
    }
    return tmp;
  };
  protoOf(SlotTable).f = function () {
    return new GroupIterator(this, 0, this.fz_1);
  };
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup) {
    var groupsToMove = fromWriter.l14(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.b12_1);
    if (fromWriter.o11_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.s11_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.j11_1;
    var currentGroup = toWriter.b12_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = fromWriter.j11_1;
    var destinationOffset = imul(currentGroup, 5);
    var startIndex = imul(fromIndex, 5);
    var endIndex = imul(sourceGroupsEnd, 5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, startIndex, endIndex);
    var slots = toWriter.k11_1;
    var currentSlot = toWriter.q11_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = fromWriter.k11_1;
    arrayCopy(this_1, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    var parent = toWriter.d12_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    var dataIndexDelta = currentSlot - dataIndex_0(groups, toWriter, currentGroup) | 0;
    var slotsGapOwner = toWriter.u11_1;
    var slotsGapLen = toWriter.t11_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataIndex = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataAnchor = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.s11_1, slotsGapLen, slotsCapacity);
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          slotsGapOwner = slotsGapOwner + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.u11_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.l11_1, fromIndex, fromWriter.j1k());
    var endAnchors = locationOf(fromWriter.l11_1, sourceGroupsEnd, fromWriter.j1k());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.l11_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.o(anchorIndex);
          sourceAnchor.v16_1 = sourceAnchor.v16_1 + anchorDelta | 0;
          anchors.d(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.l11_1, toWriter.b12_1, toWriter.j1k());
      toWriter.l11_1.b4(insertLocation, anchors);
      sourceAnchors.g1(startAnchors, endAnchors).b1();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors_0.p()) {
      var sourceSourceInformationMap = fromWriter.m11_1;
      var destinationSourceInformation = toWriter.m11_1;
      if (!(sourceSourceInformationMap == null) && !(destinationSourceInformation == null)) {
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last = anchors_0.i() - 1 | 0;
        if (inductionVariable_1 <= last)
          do {
            var index = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item = anchors_0.o(index);
            // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
            var information = sourceSourceInformationMap.l1(item);
            if (!(information == null)) {
              sourceSourceInformationMap.u3(item);
              // Inline function 'kotlin.collections.set' call
              destinationSourceInformation.t3(item, information);
            }
          }
           while (inductionVariable_1 <= last);
      }
    }
    var toWriterParent = toWriter.d12_1;
    var tmp4_safe_receiver = sourceInformationOf(toWriter, parent);
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var predecessor = -1;
      var child = toWriterParent + 1 | 0;
      var endGroup = toWriter.b12_1;
      while (child < endGroup) {
        predecessor = child;
        child = child + groupSize(toWriter.j11_1, child) | 0;
      }
      tmp4_safe_receiver.q1k(toWriter, predecessor, endGroup);
    }
    var parentGroup = fromWriter.m12(fromIndex);
    var tmp_1;
    if (!removeSourceGroup) {
      tmp_1 = false;
    } else if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.b13();
        fromWriter.r1k(parentGroup - fromWriter.b12_1 | 0);
        fromWriter.b13();
      }
      fromWriter.r1k(fromIndex - fromWriter.b12_1 | 0);
      var anchorsRemoved = fromWriter.t1a();
      if (needsStartGroups) {
        fromWriter.u12();
        fromWriter.z14();
        fromWriter.u12();
        fromWriter.z14();
      }
      tmp_1 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_1 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!anchorsRemoved_1) {
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      var tmp$ret$14 = 'Unexpectedly removed anchors';
      composeImmediateRuntimeError(tmp$ret$14);
    }
    toWriter.w11_1 = toWriter.w11_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.b12_1 = currentGroup + groupsToMove | 0;
      toWriter.q11_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function moveGroup$default($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup, $super) {
    removeSourceGroup = removeSourceGroup === VOID ? true : removeSourceGroup;
    return moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup);
  }
  function rawUpdate($this, value) {
    var result = $this.s1k();
    $this.t1k(value);
    return result;
  }
  function groupSourceInformationFor($this, parent, sourceInformation) {
    var tmp0_safe_receiver = $this.m11_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.getOrPut' call
      var key = $this.n12(parent);
      var value = tmp0_safe_receiver.l1(key);
      var tmp_0;
      if (value == null) {
        // Inline function 'androidx.compose.runtime.SlotWriter.groupSourceInformationFor.<anonymous>' call
        var result = new GroupSourceInformation(0, sourceInformation, 0);
        if (sourceInformation == null) {
          var child = parent + 1 | 0;
          var end = $this.b12_1;
          while (child < end) {
            result.u1k($this, child);
            child = child + groupSize($this.j11_1, child) | 0;
          }
        }
        var answer = result;
        tmp0_safe_receiver.t3(key, answer);
        tmp_0 = answer;
      } else {
        tmp_0 = value;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function _get_currentGroupSlotIndex__p1glxf($this) {
    var tmp = $this.q11_1 - $this.v1k($this.d12_1) | 0;
    var tmp0_safe_receiver = $this.a12_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o($this.d12_1);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.i();
    return tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var previousParent = $this.d12_1;
    var inserting = $this.v11_1 > 0;
    $this.z11_1.uz($this.w11_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      var current = $this.b12_1;
      var newCurrentSlot = dataIndex_0($this.j11_1, $this, groupIndexToAddress($this, current));
      insertGroups($this, 1);
      $this.q11_1 = newCurrentSlot;
      $this.r11_1 = newCurrentSlot;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance().d13_1);
      var hasAux = !isNode && !(aux === Companion_getInstance().d13_1);
      // Inline function 'kotlin.let' call
      var tmp0_gapLen = $this.t11_1;
      var tmp1_gapStart = $this.s11_1;
      var tmp2_capacity = $this.k11_1.length;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var anchor = dataIndexToDataAnchor($this, newCurrentSlot, tmp1_gapStart, tmp0_gapLen, tmp2_capacity);
      var tmp_1;
      if (anchor >= 0 && $this.u11_1 < current) {
        var slotsSize = $this.k11_1.length - $this.t11_1 | 0;
        tmp_1 = -((slotsSize - anchor | 0) + 1 | 0) | 0;
      } else {
        tmp_1 = anchor;
      }
      var dataAnchor = tmp_1;
      initGroup($this.j11_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.d12_1, dataAnchor);
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.k11_1;
        var currentSlot = $this.q11_1;
        if (isNode) {
          var tmp3 = currentSlot;
          currentSlot = tmp3 + 1 | 0;
          slots[tmp3] = aux;
        }
        if (hasObjectKey) {
          var tmp4 = currentSlot;
          currentSlot = tmp4 + 1 | 0;
          slots[tmp4] = objectKey;
        }
        if (hasAux) {
          var tmp5 = currentSlot;
          currentSlot = tmp5 + 1 | 0;
          slots[tmp5] = aux;
        }
        $this.q11_1 = currentSlot;
      }
      $this.w11_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.d12_1 = current;
      $this.b12_1 = newCurrent;
      if (previousParent >= 0) {
        var tmp6_safe_receiver = sourceInformationOf($this, previousParent);
        if (tmp6_safe_receiver == null)
          null;
        else {
          tmp6_safe_receiver.u1k($this, current);
        }
      }
      tmp_0 = newCurrent;
    } else {
      $this.x11_1.uz(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.b12_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance().d13_1)) {
        if (isNode) {
          $this.x1k(aux);
        } else {
          $this.w1k(aux);
        }
      }
      $this.q11_1 = slotIndex($this.j11_1, $this, currentGroupAddress);
      $this.r11_1 = dataIndex_0($this.j11_1, $this, groupIndexToAddress($this, $this.b12_1 + 1 | 0));
      $this.w11_1 = nodeCount($this.j11_1, currentGroupAddress);
      $this.d12_1 = currentGroup;
      $this.b12_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.j11_1, currentGroupAddress) | 0;
    }
    tmp.c12_1 = tmp_0;
  }
  function Companion_3() {
  }
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
  }
  function containsGroupMark($this, group) {
    return group >= 0 && containsMark($this.j11_1, groupIndexToAddress($this, group));
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 && containsAnyMark($this.j11_1, groupIndexToAddress($this, group));
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.f12_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.au()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.z1k(), tmp0_safe_receiver);
      }
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.f12_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new PrioritySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.f12_1 = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.a1l(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.j11_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.j11_1, groupAddress, containsAnyMarks);
      var parent = $this.m12(group);
      if (parent >= 0) {
        set.a1l(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.l14(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.j11_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.l14(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.y11_1.uz((_get_capacity__a9k9f3($this) - $this.p11_1 | 0) - $this.c12_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.p11_1 | 0) - $this.y11_1.e11() | 0;
    $this.c12_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.o11_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.j11_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.j11_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.p11_1;
    var gapStart = $this.o11_1;
    if (!(gapStart === index)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$this.l11_1.p()) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.j11_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          // Inline function 'kotlin.collections.copyInto' call
          var destinationOffset = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, groups, destinationOffset, groupPhysicalAddress, groupPhysicalGapStart);
        } else {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          var endIndex = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, groups, groupPhysicalGapStart, startIndex, endIndex);
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.j11_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.j11_1, groupAddress, newAnchor);
        }
        groupAddress = groupAddress + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.o11_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.t11_1;
    var gapStart = $this.s11_1;
    var slotsGapOwner = $this.u11_1;
    if (!(gapStart === index)) {
      var slots = $this.k11_1;
      if (index < gapStart) {
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = index + gapLen | 0;
        arrayCopy(slots, slots, destinationOffset, index, gapStart);
      } else {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = gapStart + gapLen | 0;
        var endIndex = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, startIndex, endIndex);
      }
    }
    // Inline function 'kotlin.math.min' call
    var a = group + 1 | 0;
    var b = $this.j1k();
    var newSlotsGapOwner = Math.min(a, b);
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.k11_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.o11_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.j11_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(anchor >= 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var tmp$ret$3 = 'Unexpected anchor value, expected a positive anchor';
            composeImmediateRuntimeError(tmp$ret$3);
          }
          updateDataAnchor($this.j11_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          updateAddress = updateAddress + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.p11_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.j11_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(anchor_0 < 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var tmp$ret$4 = 'Unexpected anchor value, expected a negative anchor';
            composeImmediateRuntimeError(tmp$ret$4);
          }
          updateDataAnchor($this.j11_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          updateAddress_0 = updateAddress_0 + 1 | 0;
          if (updateAddress_0 === $this.o11_1)
            updateAddress_0 = updateAddress_0 + $this.p11_1 | 0;
        }
      }
      $this.u11_1 = newSlotsGapOwner;
    }
    $this.s11_1 = index;
  }
  function clearSlotGap($this) {
    var slotsGapStart = $this.s11_1;
    var slotsGapEnd = slotsGapStart + $this.t11_1 | 0;
    fill_0($this.k11_1, null, slotsGapStart, slotsGapEnd);
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.b12_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.o11_1;
      var gapLen = $this.p11_1;
      var oldCapacity = $this.j11_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.j11_1;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = imul(gapStart, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, newGroups, 0, 0, endIndex);
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = imul(newGapEndAddress, 5);
        var startIndex = imul(oldGapEndAddress, 5);
        var endIndex_0 = imul(oldCapacity, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, newGroups, destinationOffset, startIndex, endIndex_0);
        $this.j11_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.c12_1;
      if (currentEnd >= gapStart)
        $this.c12_1 = currentEnd + size | 0;
      $this.o11_1 = gapStart + size | 0;
      $this.p11_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.u11_1 < gapStart ? 0 : $this.s11_1, $this.t11_1, $this.k11_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.j11_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.u11_1;
      if (slotsGapOwner >= gapStart) {
        $this.u11_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.q11_1, group);
      var gapStart = $this.s11_1;
      var gapLen = $this.t11_1;
      if (gapLen < size) {
        var slots = $this.k11_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var tmp = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_0 = fillArrayVal(Array(newCapacity), null);
        while (tmp < newCapacity) {
          tmp_0[tmp] = null;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_0;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        $this.k11_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.r11_1;
      if (currentDataEnd >= gapStart)
        $this.r11_1 = currentDataEnd + size | 0;
      $this.s11_1 = gapStart + size | 0;
      $this.t11_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.l11_1;
      moveGroupGapTo($this, start);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!anchors.p()) {
        anchorsRemoved = removeAnchors($this, start, len, $this.m11_1);
      }
      $this.o11_1 = start;
      var previousGapLen = $this.p11_1;
      var newGapLen = previousGapLen + len | 0;
      $this.p11_1 = newGapLen;
      var slotsGapOwner = $this.u11_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        // Inline function 'kotlin.math.max' call
        var b = slotsGapOwner - len | 0;
        tmp_0.u11_1 = Math.max(start, b);
      }
      if ($this.c12_1 >= $this.o11_1) {
        $this.c12_1 = $this.c12_1 - len | 0;
      }
      var parent = $this.d12_1;
      if (containsGroupMark($this, parent)) {
        updateContainsMark($this, parent);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function sourceInformationOf($this, group) {
    var tmp0_safe_receiver = $this.m11_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = $this.b1l(group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.l1(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.t11_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.s11_1 = start;
      $this.t11_1 = gapLen + len | 0;
      fill_0($this.k11_1, null, start, start + len | 0);
      var currentDataEnd = $this.r11_1;
      if (currentDataEnd >= start)
        $this.r11_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(address < $this.j11_1.length && isNode($this.j11_1, address))) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      var tmp$ret$0 = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    $this.k11_1[dataIndexToDataAddress($this, nodeIndex($this.j11_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.p11_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.l11_1, previousGapStart, size);
      $l$loop_0: while (index < $this.l11_1.i()) {
        var anchor = $this.l11_1.o(index);
        var location = anchor.v16_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.v16_1 = size + location | 0;
            index = index + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.l11_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.l11_1.i()) {
        var anchor_0 = $this.l11_1.o(index_0);
        var location_0 = anchor_0.v16_1;
        if (location_0 >= 0) {
          anchor_0.v16_1 = -(size - location_0 | 0) | 0;
          index_0 = index_0 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size, sourceInformationMap) {
    var gapLen = $this.p11_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    var it = locationOf($this.l11_1, gapStart + size | 0, groupsSize);
    var index = it >= $this.l11_1.i() ? it - 1 | 0 : it;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.l11_1.o(index);
      var location = $this.c16(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.v16_1 = -2147483648;
          if (sourceInformationMap == null)
            null;
          else
            sourceInformationMap.u3(anchor);
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        index = index - 1 | 0;
      } else
        break $l$loop;
    }
    // Inline function 'kotlin.also' call
    var this_0 = removeAnchorStart < removeAnchorEnd;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (this_0) {
      $this.l11_1.g1(removeAnchorStart, removeAnchorEnd).b1();
    }
    return this_0;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.j1k();
    var index = locationOf($this.l11_1, originalLocation, groupsSize);
    // Inline function 'kotlin.collections.mutableListOf' call
    var removedAnchors = ArrayList_init_$Create$();
    if (index >= 0) {
      $l$loop: while (index < $this.l11_1.i()) {
        var anchor = $this.l11_1.o(index);
        var location = $this.c16(anchor);
        if (location >= originalLocation && location < end) {
          removedAnchors.d(anchor);
          $this.l11_1.e1(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.o(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.c16(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.o11_1) {
          item.v16_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.v16_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.l11_1, newAnchorIndex, groupsSize);
        $this.l11_1.d1(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.j11_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.o11_1 ? index : index + $this.p11_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.s11_1 ? dataIndex : dataIndex + $this.t11_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.j11_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.k11_1.length - $this.t11_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.t11_1, $this.k11_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.k11_1.length - $this.t11_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.t11_1, $this.k11_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.s11_1, $this.t11_1, $this.k11_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.j1k() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.j1k() + index | 0) - -2 | 0;
  }
  function SlotWriter(table) {
    this.i11_1 = table;
    this.j11_1 = this.i11_1.ez_1;
    this.k11_1 = this.i11_1.gz_1;
    this.l11_1 = this.i11_1.mz_1;
    this.m11_1 = this.i11_1.nz_1;
    this.n11_1 = this.i11_1.oz_1;
    this.o11_1 = this.i11_1.fz_1;
    this.p11_1 = (this.j11_1.length / 5 | 0) - this.i11_1.fz_1 | 0;
    this.q11_1 = 0;
    this.r11_1 = 0;
    this.s11_1 = this.i11_1.hz_1;
    this.t11_1 = this.k11_1.length - this.i11_1.hz_1 | 0;
    this.u11_1 = this.i11_1.fz_1;
    this.v11_1 = 0;
    this.w11_1 = 0;
    this.x11_1 = new IntStack();
    this.y11_1 = new IntStack();
    this.z11_1 = new IntStack();
    this.a12_1 = null;
    this.b12_1 = 0;
    this.c12_1 = this.i11_1.fz_1;
    this.d12_1 = -1;
    this.e12_1 = false;
    this.f12_1 = null;
  }
  protoOf(SlotWriter).n1a = function () {
    return this.k11_1.length - this.t11_1 | 0;
  };
  protoOf(SlotWriter).p19 = function () {
    return this.b12_1 < this.c12_1 && isNode(this.j11_1, groupIndexToAddress(this, this.b12_1));
  };
  protoOf(SlotWriter).c1l = function () {
    return !(this.m11_1 == null);
  };
  protoOf(SlotWriter).d1l = function () {
    return !(this.n11_1 == null);
  };
  protoOf(SlotWriter).h15 = function (index) {
    return isNode(this.j11_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).i15 = function (index) {
    return nodeCount(this.j11_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).p12 = function (index) {
    return key(this.j11_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).q12 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.j11_1, address) ? this.k11_1[objectKeyIndex(this.j11_1, address)] : null;
  };
  protoOf(SlotWriter).l14 = function (index) {
    return groupSize(this.j11_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).o12 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.j11_1, address) ? this.k11_1[auxIndex(this.j11_1, this, address)] : Companion_getInstance().d13_1;
  };
  protoOf(SlotWriter).e1l = function (index) {
    return index > this.d12_1 && index < this.c12_1 || (this.d12_1 === 0 && index === 0);
  };
  protoOf(SlotWriter).f1l = function (index) {
    return this.g1l(index, this.b12_1);
  };
  protoOf(SlotWriter).g1l = function (index, group) {
    var tmp;
    if (group === this.d12_1) {
      tmp = this.c12_1;
    } else if (group > this.x11_1.i1l(0)) {
      tmp = group + this.l14(group) | 0;
    } else {
      var openIndex = this.x11_1.h1l(group);
      tmp = openIndex < 0 ? group + this.l14(group) | 0 : (_get_capacity__a9k9f3(this) - this.p11_1 | 0) - this.y11_1.g15(openIndex) | 0;
    }
    var end = tmp;
    return index > group && index < end;
  };
  protoOf(SlotWriter).c17 = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.j11_1, address) ? this.k11_1[dataIndexToDataAddress(this, nodeIndex(this.j11_1, this, address))] : null;
  };
  protoOf(SlotWriter).j1l = function (anchor) {
    return this.c17(anchor.k1l(this));
  };
  protoOf(SlotWriter).m12 = function (index) {
    return parent(this.j11_1, this, index);
  };
  protoOf(SlotWriter).y12 = function (normalClose) {
    this.e12_1 = true;
    if (normalClose && this.x11_1.p()) {
      moveGroupGapTo(this, this.j1k());
      moveSlotGapTo(this, this.k11_1.length - this.t11_1 | 0, this.o11_1);
      clearSlotGap(this);
      recalculateMarks(this);
    }
    this.i11_1.g1k(this, this.j11_1, this.o11_1, this.k11_1, this.s11_1, this.l11_1, this.m11_1, this.n11_1);
  };
  protoOf(SlotWriter).l1l = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.v11_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      var tmp$ret$0 = 'Cannot reset when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    recalculateMarks(this);
    this.b12_1 = 0;
    this.c12_1 = _get_capacity__a9k9f3(this) - this.p11_1 | 0;
    this.q11_1 = 0;
    this.r11_1 = 0;
    this.w11_1 = 0;
  };
  protoOf(SlotWriter).l19 = function (value) {
    if (this.v11_1 > 0 && !(this.q11_1 === this.s11_1)) {
      // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut' call
      // Inline function 'kotlin.also' call
      var tmp0_elvis_lhs = this.a12_1;
      var this_0 = tmp0_elvis_lhs == null ? new MutableIntObjectMap() : tmp0_elvis_lhs;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.update.<anonymous>' call
      this.a12_1 = this_0;
      var key = this.d12_1;
      var tmp0_elvis_lhs_0 = this_0.o(key);
      var tmp;
      if (tmp0_elvis_lhs_0 == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.SlotWriter.update.<anonymous>' call
        var this_1 = new MutableObjectList();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut.<anonymous>' call
        this_0.yq(key, this_1);
        tmp = this_1;
      } else {
        tmp = tmp0_elvis_lhs_0;
      }
      var deferred = tmp;
      deferred.d(value);
      return Companion_getInstance().d13_1;
    }
    return rawUpdate(this, value);
  };
  protoOf(SlotWriter).m1l = function (anchor, value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.v11_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.appendSlot.<anonymous>' call
      var tmp$ret$0 = 'Can only append a slot if not current inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var previousCurrentSlot = this.q11_1;
    var previousCurrentSlotEnd = this.r11_1;
    var anchorIndex = this.c16(anchor);
    var slotIndex = dataIndex_0(this.j11_1, this, groupIndexToAddress(this, anchorIndex + 1 | 0));
    this.q11_1 = slotIndex;
    this.r11_1 = slotIndex;
    insertSlots(this, 1, anchorIndex);
    if (previousCurrentSlot >= slotIndex) {
      previousCurrentSlot = previousCurrentSlot + 1 | 0;
      previousCurrentSlotEnd = previousCurrentSlotEnd + 1 | 0;
    }
    this.k11_1[slotIndex] = value;
    this.q11_1 = previousCurrentSlot;
    this.r11_1 = previousCurrentSlotEnd;
  };
  protoOf(SlotWriter).n1l = function (count) {
    runtimeCheck(count > 0);
    var parent = this.d12_1;
    var groupSlotStart = slotIndex(this.j11_1, this, groupIndexToAddress(this, parent));
    var groupSlotEnd = dataIndex_0(this.j11_1, this, groupIndexToAddress(this, parent + 1 | 0));
    var removeStart = groupSlotEnd - count | 0;
    runtimeCheck(removeStart >= groupSlotStart);
    removeSlots(this, removeStart, count, parent);
    var currentSlot = this.q11_1;
    if (currentSlot >= groupSlotStart) {
      this.q11_1 = currentSlot - count | 0;
    }
  };
  protoOf(SlotWriter).w1k = function (value) {
    var address = groupIndexToAddress(this, this.b12_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!hasAux(this.j11_1, address)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      var tmp$ret$0 = 'Updating the data of a group that was not created with a data slot';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.k11_1[dataIndexToDataAddress(this, auxIndex(this.j11_1, this, address))] = value;
  };
  protoOf(SlotWriter).z19 = function (sourceInformation) {
    if (this.v11_1 > 0) {
      groupSourceInformationFor(this, this.d12_1, sourceInformation);
    }
  };
  protoOf(SlotWriter).b1a = function (key, value) {
    if (this.v11_1 > 0) {
      var tmp0_safe_receiver = this.n11_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        add_0(tmp0_safe_receiver, key, this.p12(this.d12_1));
      }
      var tmp1_safe_receiver = groupSourceInformationFor(this, this.d12_1, null);
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.o1l(key, value, _get_currentGroupSlotIndex__p1glxf(this));
      }
    }
  };
  protoOf(SlotWriter).d1a = function () {
    if (this.v11_1 > 0) {
      var tmp0_safe_receiver = groupSourceInformationFor(this, this.d12_1, null);
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.p1l(_get_currentGroupSlotIndex__p1glxf(this));
      }
    }
  };
  protoOf(SlotWriter).x1k = function (value) {
    return updateNodeOfGroup(this, this.b12_1, value);
  };
  protoOf(SlotWriter).q1l = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.k1l(this), value);
  };
  protoOf(SlotWriter).t1k = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.q11_1 <= this.r11_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var tmp$ret$0 = 'Writing to an invalid slot';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.k11_1[dataIndexToDataAddress(this, this.q11_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).r1l = function (index, value) {
    return this.s1l(this.b12_1, index, value);
  };
  protoOf(SlotWriter).t1l = function (group, index) {
    var address = groupIndexToAddress(this, group);
    var slotsStart = slotIndex(this.j11_1, this, address);
    var slotsEnd = dataIndex_0(this.j11_1, this, groupIndexToAddress(this, group + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(slotsIndex >= slotsStart && slotsIndex < slotsEnd)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.slotIndexOfGroupSlotIndex.<anonymous>' call
      var tmp$ret$0 = 'Write to an invalid slot index ' + index + ' for group ' + group;
      composeImmediateRuntimeError(tmp$ret$0);
    }
    return slotsIndex;
  };
  protoOf(SlotWriter).s1l = function (group, index, value) {
    var slotsIndex = this.t1l(group, index);
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.k11_1[slotAddress];
    this.k11_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).s1k = function () {
    if (this.v11_1 > 0) {
      insertSlots(this, 1, this.d12_1);
    }
    var tmp = this.k11_1;
    var tmp1 = this.q11_1;
    this.q11_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).p1f = function (anchor, index) {
    return this.u1l(this.c16(anchor), index);
  };
  protoOf(SlotWriter).u1l = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.j11_1, this, address);
    var slotsEnd = dataIndex_0(this.j11_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance().d13_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.k11_1[slotAddress];
  };
  protoOf(SlotWriter).v1k = function (groupIndex) {
    return slotIndex(this.j11_1, this, groupIndexToAddress(this, groupIndex));
  };
  protoOf(SlotWriter).v1l = function (groupIndex) {
    return dataIndex_0(this.j11_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
  };
  protoOf(SlotWriter).p1a = function (groupIndex) {
    return dataIndex_0(this.j11_1, this, groupIndexToAddress(this, groupIndex + this.l14(groupIndex) | 0));
  };
  protoOf(SlotWriter).r1k = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(amount >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var tmp$ret$0 = 'Cannot seek backwards';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.v11_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var tmp$ret$1 = 'Cannot call seek() while inserting';
      throwIllegalStateException(tmp$ret$1);
    }
    if (amount === 0)
      return Unit_instance;
    var index = this.b12_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= this.d12_1 && index <= this.c12_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var tmp$ret$2 = 'Cannot seek outside the current group (' + this.d12_1 + '-' + this.c12_1 + ')';
      composeImmediateRuntimeError(tmp$ret$2);
    }
    this.b12_1 = index;
    var newSlot = dataIndex_0(this.j11_1, this, groupIndexToAddress(this, index));
    this.q11_1 = newSlot;
    this.r11_1 = newSlot;
  };
  protoOf(SlotWriter).u12 = function () {
    var newGroup = this.c12_1;
    this.b12_1 = newGroup;
    this.q11_1 = dataIndex_0(this.j11_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).u13 = function () {
    var tmp1 = this.v11_1;
    this.v11_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).a15 = function () {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.v11_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      var tmp$ret$0 = 'Unbalanced begin/end insert';
      throwIllegalStateException(tmp$ret$0);
    }
    this.v11_1 = this.v11_1 - 1 | 0;
    if (this.v11_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.z11_1.i() === this.x11_1.i())) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        var tmp$ret$1 = 'startGroup/endGroup mismatch while inserting';
        composeImmediateRuntimeError(tmp$ret$1);
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).b13 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.v11_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var tmp$ret$0 = 'Key must be supplied when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    startGroup_1(this, 0, Companion_getInstance().d13_1, false, Companion_getInstance().d13_1);
  };
  protoOf(SlotWriter).f13 = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance().d13_1);
  };
  protoOf(SlotWriter).h13 = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance().d13_1);
  };
  protoOf(SlotWriter).g13 = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).z14 = function () {
    var inserting = this.v11_1 > 0;
    var currentGroup = this.b12_1;
    var currentGroupEnd = this.c12_1;
    var groupIndex = this.d12_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.w11_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.j11_1, groupAddress);
    if (inserting) {
      var deferredSlotWrites = this.a12_1;
      var tmp1_safe_receiver = deferredSlotWrites == null ? null : deferredSlotWrites.o(groupIndex);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        // Inline function 'androidx.collection.ObjectList.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var content = tmp1_safe_receiver.as_1;
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.bs_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>.<anonymous>' call
            var tmp = content[i];
            var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
            rawUpdate(this, value);
          }
           while (inductionVariable < last);
        deferredSlotWrites.zq(groupIndex);
      }
      updateGroupSize(this.j11_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.j11_1, groupAddress, newNodes);
      this.w11_1 = this.z11_1.e11() + (isNode_0 ? 1 : newNodes) | 0;
      this.d12_1 = parent(this.j11_1, this, groupIndex);
      var nextAddress = this.d12_1 < 0 ? this.j1k() : groupIndexToAddress(this, this.d12_1 + 1 | 0);
      var newCurrentSlot = nextAddress < 0 ? 0 : dataIndex_0(this.j11_1, this, nextAddress);
      this.q11_1 = newCurrentSlot;
      this.r11_1 = newCurrentSlot;
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(currentGroup === currentGroupEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        var tmp$ret$2 = 'Expected to be at the end of a group';
        composeImmediateRuntimeError(tmp$ret$2);
      }
      var oldGroupSize = groupSize(this.j11_1, groupAddress);
      var oldNodes = nodeCount(this.j11_1, groupAddress);
      updateGroupSize(this.j11_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.j11_1, groupAddress, newNodes);
      var newParent = this.x11_1.e11();
      restoreCurrentGroupEnd(this);
      this.d12_1 = newParent;
      var groupParent = parent(this.j11_1, this, groupIndex);
      this.w11_1 = this.z11_1.e11();
      if (groupParent === newParent) {
        this.w11_1 = this.w11_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) || !(nodesDelta === 0)) {
          var current = groupParent;
          while (!(current === 0) && !(current === newParent) && (!(nodesDelta === 0) || !(groupSizeDelta === 0))) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.j11_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.j11_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.j11_1, currentAddress, nodeCount(this.j11_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.j11_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.j11_1, this, current);
          }
        }
        this.w11_1 = this.w11_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).w1l = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.v11_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      var tmp$ret$0 = 'Cannot call ensureStarted() while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var parent = this.d12_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(index >= parent && index < this.c12_1)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        var tmp$ret$1 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        composeImmediateRuntimeError(tmp$ret$1);
      }
      var oldCurrent = this.b12_1;
      var oldCurrentSlot = this.q11_1;
      var oldCurrentSlotEnd = this.r11_1;
      this.b12_1 = index;
      this.b13();
      this.b12_1 = oldCurrent;
      this.q11_1 = oldCurrentSlot;
      this.r11_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).x1l = function (anchor) {
    return this.w1l(anchor.k1l(this));
  };
  protoOf(SlotWriter).j12 = function () {
    var groupAddress = groupIndexToAddress(this, this.b12_1);
    var newGroup = this.b12_1 + groupSize(this.j11_1, groupAddress) | 0;
    this.b12_1 = newGroup;
    this.q11_1 = dataIndex_0(this.j11_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.j11_1, groupAddress) ? 1 : nodeCount(this.j11_1, groupAddress);
  };
  protoOf(SlotWriter).t1a = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.v11_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var tmp$ret$0 = 'Cannot remove group while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var oldGroup = this.b12_1;
    var oldSlot = this.q11_1;
    var dataStart = dataIndex_0(this.j11_1, this, groupIndexToAddress(this, oldGroup));
    var count = this.j12();
    var tmp0_safe_receiver = sourceInformationOf(this, this.d12_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var tmp0_safe_receiver_0 = this.b1l(oldGroup);
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>.<anonymous>' call
        tmp = tmp0_safe_receiver.y1l(tmp0_safe_receiver_0);
      }
    }
    var tmp1_safe_receiver = this.f12_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp1_safe_receiver.au() && tmp1_safe_receiver.t18() >= oldGroup) {
        tmp1_safe_receiver.z1k();
      }
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.b12_1 - oldGroup | 0);
    removeSlots(this, dataStart, this.q11_1 - dataStart | 0, oldGroup - 1 | 0);
    this.b12_1 = oldGroup;
    this.q11_1 = oldSlot;
    this.w11_1 = this.w11_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).z1l = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.v11_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var tmp$ret$0 = 'Cannot move a group while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(offset >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var tmp$ret$1 = 'Parameter offset is out of bounds';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    if (offset === 0)
      return Unit_instance;
    var current = this.b12_1;
    var parent = this.d12_1;
    var parentEnd = this.c12_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.j11_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(groupToMove <= parentEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        var tmp$ret$2 = 'Parameter offset is out of bounds';
        composeImmediateRuntimeError(tmp$ret$2);
      }
      count = count - 1 | 0;
    }
    var moveLen = groupSize(this.j11_1, groupIndexToAddress(this, groupToMove));
    var destinationSlot = dataIndex_0(this.j11_1, this, groupIndexToAddress(this, this.b12_1));
    var dataStart = dataIndex_0(this.j11_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.j11_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    // Inline function 'kotlin.math.max' call
    var a = this.b12_1 - 1 | 0;
    var tmp$ret$3 = Math.max(a, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.j11_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = imul(currentAddress, 5);
    var endIndex = moveLocationOffset + imul(moveLen, 5) | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = groups;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, moveLocationOffset, endIndex);
    if (moveDataLen > 0) {
      var slots = this.k11_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var endIndex_0 = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, destinationSlot, startIndex, endIndex_0);
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - destinationSlot | 0;
    var slotsGapStart = this.s11_1;
    var slotsGapLen = this.t11_1;
    var slotsCapacity = this.k11_1.length;
    var slotsGapOwner = this.u11_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!anchorsRemoved) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var tmp$ret$10 = 'Unexpectedly removed anchors';
      composeImmediateRuntimeError(tmp$ret$10);
    }
    fixParentAnchorsFor(this, parent, this.c12_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).a1m = function (anchor, offset, writer) {
    runtimeCheck(writer.v11_1 > 0);
    runtimeCheck(this.v11_1 === 0);
    runtimeCheck(anchor.q1a());
    var location = this.c16(anchor) + offset | 0;
    var currentGroup = this.b12_1;
    runtimeCheck(currentGroup <= location ? location < this.c12_1 : false);
    var parent = this.m12(location);
    var size = this.l14(location);
    var nodes = this.h15(location) ? 1 : this.i15(location);
    var result = moveGroup$default(Companion_instance_4, this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.j11_1, currentAddress, groupSize(this.j11_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.j11_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.j11_1, currentAddress, nodeCount(this.j11_1, currentAddress) - nodes | 0);
        }
      }
      current = this.m12(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.w11_1 >= nodes);
      this.w11_1 = this.w11_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).b1m = function (table, index, removeSourceGroup) {
    runtimeCheck(this.v11_1 > 0);
    if (index === 0 && this.b12_1 === 0 && this.i11_1.fz_1 === 0 && groupSize(table.ez_1, index) === table.fz_1) {
      var myGroups = this.j11_1;
      var mySlots = this.k11_1;
      var myAnchors = this.l11_1;
      var mySourceInformation = this.m11_1;
      var myCallInformation = this.n11_1;
      var groups = table.ez_1;
      var groupsSize = table.fz_1;
      var slots = table.gz_1;
      var slotsSize = table.hz_1;
      var sourceInformation = table.nz_1;
      var callInformation = table.oz_1;
      this.j11_1 = groups;
      this.k11_1 = slots;
      this.l11_1 = table.mz_1;
      this.o11_1 = groupsSize;
      this.p11_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.s11_1 = slotsSize;
      this.t11_1 = slots.length - slotsSize | 0;
      this.u11_1 = groupsSize;
      this.m11_1 = sourceInformation;
      this.n11_1 = callInformation;
      table.h1k(myGroups, 0, mySlots, 0, myAnchors, mySourceInformation, myCallInformation);
      return this.l11_1;
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.t12();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = moveGroup(Companion_instance_4, writer, index, this, true, true, removeSourceGroup);
    }finally {
      writer.y12(normalClose);
    }
    return tmp;
  };
  protoOf(SlotWriter).c1m = function (offset, table, index) {
    runtimeCheck(this.v11_1 <= 0 && this.l14(this.b12_1 + offset | 0) === 1);
    var previousCurrentGroup = this.b12_1;
    var previousCurrentSlot = this.q11_1;
    var previousCurrentSlotEnd = this.r11_1;
    this.r1k(offset);
    this.b13();
    this.u13();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.t12();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = moveGroup$default(Companion_instance_4, writer, index, this, false, true);
    }finally {
      writer.y12(normalClose);
    }
    var anchors = tmp;
    this.a15();
    this.z14();
    this.b12_1 = previousCurrentGroup;
    this.q11_1 = previousCurrentSlot;
    this.r11_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).n12 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.l11_1;
    var effectiveSize = this.j1k();
    var location = search$accessor$n8vbwb(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      var anchor = new Anchor(index <= this.o11_1 ? index : -(this.j1k() - index | 0) | 0);
      this_0.d1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.o(location);
    }
    return tmp;
  };
  protoOf(SlotWriter).d1m = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.j11_1, groupAddress)) {
      updateMark(this.j11_1, groupAddress, true);
      if (!containsMark(this.j11_1, groupAddress)) {
        updateContainsMark(this, this.m12(group));
      }
    }
  };
  protoOf(SlotWriter).r15 = function (group, $super) {
    group = group === VOID ? this.d12_1 : group;
    var tmp;
    if ($super === VOID) {
      this.d1m(group);
      tmp = Unit_instance;
    } else {
      tmp = $super.d1m.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).c16 = function (anchor) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    var it = anchor.v16_1;
    return it < 0 ? this.j1k() + it | 0 : it;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.b12_1 + ' end=' + this.c12_1 + ' size = ' + this.j1k() + ' ' + ('gap=' + this.o11_1 + '-' + (this.o11_1 + this.p11_1 | 0) + ')');
  };
  protoOf(SlotWriter).b1l = function (group) {
    return (0 <= group ? group < this.j1k() : false) ? find(this.l11_1, group, this.j1k()) : null;
  };
  protoOf(SlotWriter).j1k = function () {
    return _get_capacity__a9k9f3(this) - this.p11_1 | 0;
  };
  function Anchor(loc) {
    this.v16_1 = loc;
  }
  protoOf(Anchor).q1a = function () {
    return !(this.v16_1 === -2147483648);
  };
  protoOf(Anchor).o19 = function (slots) {
    return slots.c16(this);
  };
  protoOf(Anchor).k1l = function (writer) {
    return writer.c16(this);
  };
  protoOf(Anchor).toString = function () {
    return anyToString(this) + '{ location = ' + this.v16_1 + ' }';
  };
  function openInformation($this) {
    var tmp0_safe_receiver = $this.n1k_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.fastLastOrNull' call
        var index = tmp0_safe_receiver.i() - 1 | 0;
        while (index >= 0) {
          var value = tmp0_safe_receiver.o(index);
          // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>.<anonymous>' call
          var tmp_0;
          if (value instanceof GroupSourceInformation) {
            tmp_0 = !value.o1k_1;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$1 = value;
            break $l$block;
          }
          index = index - 1 | 0;
        }
        tmp$ret$1 = null;
      }
      tmp = tmp$ret$1;
    }
    var tmp_1 = tmp;
    var tmp1_safe_receiver = tmp_1 instanceof GroupSourceInformation ? tmp_1 : null;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : openInformation(tmp1_safe_receiver);
    return tmp2_elvis_lhs == null ? $this : tmp2_elvis_lhs;
  }
  function add($this, group) {
    var tmp0_elvis_lhs = $this.n1k_1;
    var groups = tmp0_elvis_lhs == null ? ArrayList_init_$Create$() : tmp0_elvis_lhs;
    $this.n1k_1 = groups;
    groups.d(group);
  }
  function hasAnchor($this, anchor) {
    var tmp0_safe_receiver = $this.n1k_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.GroupSourceInformation.hasAnchor.<anonymous>' call
            var tmp_0;
            if (equals(item, anchor)) {
              tmp_0 = true;
            } else {
              var tmp_1;
              if (item instanceof GroupSourceInformation) {
                tmp_1 = hasAnchor(item, anchor);
              } else {
                tmp_1 = false;
              }
              tmp_0 = tmp_1;
            }
            if (tmp_0) {
              tmp$ret$1 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = false;
      }
      tmp = tmp$ret$1;
    }
    return tmp === true;
  }
  function GroupSourceInformation(key, sourceInformation, dataStartOffset) {
    this.k1k_1 = key;
    this.l1k_1 = sourceInformation;
    this.m1k_1 = dataStartOffset;
    this.n1k_1 = null;
    this.o1k_1 = false;
    this.p1k_1 = 0;
  }
  protoOf(GroupSourceInformation).o1l = function (key, sourceInformation, dataOffset) {
    add(openInformation(this), new GroupSourceInformation(key, sourceInformation, dataOffset));
  };
  protoOf(GroupSourceInformation).p1l = function (dataOffset) {
    openInformation(this).e1m(dataOffset);
  };
  protoOf(GroupSourceInformation).u1k = function (writer, group) {
    add(openInformation(this), writer.n12(group));
  };
  protoOf(GroupSourceInformation).f1m = function (table, group) {
    add(openInformation(this), table.n12(group));
  };
  protoOf(GroupSourceInformation).q1k = function (writer, predecessor, group) {
    var tmp0_elvis_lhs = this.n1k_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
      this.n1k_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var groups = tmp;
    var tmp_0;
    if (predecessor >= 0) {
      var anchor = writer.b1l(predecessor);
      var tmp_1;
      if (!(anchor == null)) {
        var tmp$ret$2;
        $l$block: {
          // Inline function 'androidx.compose.runtime.fastIndexOf' call
          var index = 0;
          var size = groups.i();
          while (index < size) {
            var value = groups.o(index);
            // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
            var tmp_2;
            if (equals(value, anchor)) {
              tmp_2 = true;
            } else {
              var tmp_3;
              if (value instanceof GroupSourceInformation) {
                tmp_3 = hasAnchor(value, anchor);
              } else {
                tmp_3 = false;
              }
              tmp_2 = tmp_3;
            }
            if (tmp_2) {
              tmp$ret$2 = index;
              break $l$block;
            }
            index = index + 1 | 0;
          }
          tmp$ret$2 = -1;
        }
        tmp_1 = tmp$ret$2;
      } else {
        tmp_1 = 0;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = 0;
    }
    var index_0 = tmp_0;
    groups.d1(index_0, writer.n12(group));
  };
  protoOf(GroupSourceInformation).e1m = function (dataOffset) {
    this.o1k_1 = true;
    this.p1k_1 = dataOffset;
  };
  protoOf(GroupSourceInformation).y1l = function (anchor) {
    var groups = this.n1k_1;
    if (!(groups == null)) {
      var index = groups.i() - 1 | 0;
      while (index >= 0) {
        var item = groups.o(index);
        if (item instanceof Anchor) {
          if (equals(item, anchor)) {
            groups.e1(index);
          }
        } else {
          if (item instanceof GroupSourceInformation)
            if (!item.y1l(anchor)) {
              groups.e1(index);
            }
        }
        index = index - 1 | 0;
      }
      if (groups.p()) {
        this.n1k_1 = null;
        return false;
      }
      return true;
    }
    return true;
  };
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.r10_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance().d13_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.r10_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance().d13_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.r10_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.o10_1 = table;
    this.p10_1 = this.o10_1.ez_1;
    this.q10_1 = this.o10_1.fz_1;
    this.r10_1 = this.o10_1.gz_1;
    this.s10_1 = this.o10_1.hz_1;
    this.t10_1 = null;
    this.u10_1 = false;
    this.v10_1 = 0;
    this.w10_1 = this.q10_1;
    this.x10_1 = -1;
    this.y10_1 = new IntStack();
    this.z10_1 = 0;
    this.a11_1 = 0;
    this.b11_1 = 0;
    this.c11_1 = false;
  }
  protoOf(SlotReader).i = function () {
    return this.q10_1;
  };
  protoOf(SlotReader).m12 = function (index) {
    return parentAnchor(this.p10_1, index);
  };
  protoOf(SlotReader).p19 = function () {
    return isNode(this.p10_1, this.v10_1);
  };
  protoOf(SlotReader).h15 = function (index) {
    return isNode(this.p10_1, index);
  };
  protoOf(SlotReader).i15 = function (index) {
    return nodeCount(this.p10_1, index);
  };
  protoOf(SlotReader).c17 = function (index) {
    return isNode(this.p10_1, index) ? node(this.p10_1, this, index) : null;
  };
  protoOf(SlotReader).r14 = function () {
    return this.c15() || this.v10_1 === this.w10_1;
  };
  protoOf(SlotReader).c15 = function () {
    return this.z10_1 > 0;
  };
  protoOf(SlotReader).g1m = function () {
    return groupSize(this.p10_1, this.v10_1);
  };
  protoOf(SlotReader).l14 = function (index) {
    return groupSize(this.p10_1, index);
  };
  protoOf(SlotReader).q14 = function () {
    return this.w10_1;
  };
  protoOf(SlotReader).q13 = function () {
    var tmp;
    if (this.v10_1 < this.w10_1) {
      tmp = key(this.p10_1, this.v10_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).p12 = function (index) {
    return key(this.p10_1, index);
  };
  protoOf(SlotReader).h19 = function () {
    return this.a11_1 - slotAnchor(this.p10_1, this.x10_1) | 0;
  };
  protoOf(SlotReader).j15 = function (index) {
    return hasObjectKey(this.p10_1, index);
  };
  protoOf(SlotReader).m18 = function () {
    return this.v10_1 < this.w10_1 && hasObjectKey(this.p10_1, this.v10_1);
  };
  protoOf(SlotReader).s13 = function () {
    return this.v10_1 < this.w10_1 ? objectKey(this.p10_1, this, this.v10_1) : null;
  };
  protoOf(SlotReader).q12 = function (index) {
    return objectKey(this.p10_1, this, index);
  };
  protoOf(SlotReader).a13 = function () {
    return this.v10_1 < this.w10_1 ? aux(this.p10_1, this, this.v10_1) : 0;
  };
  protoOf(SlotReader).o12 = function (index) {
    return aux(this.p10_1, this, index);
  };
  protoOf(SlotReader).a18 = function (index) {
    return hasMark(this.p10_1, index);
  };
  protoOf(SlotReader).k17 = function (index) {
    return containsMark(this.p10_1, index);
  };
  protoOf(SlotReader).l15 = function () {
    return this.x10_1 >= 0 ? nodeCount(this.p10_1, this.x10_1) : 0;
  };
  protoOf(SlotReader).t14 = function () {
    return this.b11_1 - this.a11_1 | 0;
  };
  protoOf(SlotReader).l17 = function (group, index) {
    var start = slotAnchor(this.p10_1, group);
    var next = group + 1 | 0;
    var end = next < this.q10_1 ? dataAnchor(this.p10_1, next) : this.s10_1;
    var address = start + index | 0;
    return address < end ? this.r10_1[address] : Companion_getInstance().d13_1;
  };
  protoOf(SlotReader).h = function () {
    if (this.z10_1 > 0 || this.a11_1 >= this.b11_1) {
      this.c11_1 = false;
      return Companion_getInstance().d13_1;
    }
    this.c11_1 = true;
    var tmp1 = this.a11_1;
    this.a11_1 = tmp1 + 1 | 0;
    return this.r10_1[tmp1];
  };
  protoOf(SlotReader).e13 = function () {
    this.z10_1 = this.z10_1 + 1 | 0;
  };
  protoOf(SlotReader).y14 = function () {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.z10_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      var tmp$ret$0 = 'Unbalanced begin/end empty';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.z10_1 = this.z10_1 - 1 | 0;
  };
  protoOf(SlotReader).d11 = function () {
    this.u10_1 = true;
    this.o10_1.f1k(this, this.t10_1);
  };
  protoOf(SlotReader).b13 = function () {
    if (this.z10_1 <= 0) {
      var parent = this.x10_1;
      var currentGroup = this.v10_1;
      // Inline function 'androidx.compose.runtime.requirePrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(parentAnchor(this.p10_1, currentGroup) === parent)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        var tmp$ret$0 = 'Invalid slot table detected';
        throwIllegalArgumentException(tmp$ret$0);
      }
      var tmp0_safe_receiver = this.t10_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1(this.n12(parent));
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.f1m(this.o10_1, currentGroup);
      }
      var currentSlotStack = this.y10_1;
      var currentSlot = this.a11_1;
      var currentEndSlot = this.b11_1;
      if (currentSlot === 0 && currentEndSlot === 0) {
        currentSlotStack.uz(-1);
      } else {
        currentSlotStack.uz(currentSlot);
      }
      this.x10_1 = currentGroup;
      this.w10_1 = currentGroup + groupSize(this.p10_1, currentGroup) | 0;
      this.v10_1 = currentGroup + 1 | 0;
      this.a11_1 = slotAnchor(this.p10_1, currentGroup);
      this.b11_1 = currentGroup >= (this.q10_1 - 1 | 0) ? this.s10_1 : dataAnchor(this.p10_1, currentGroup + 1 | 0);
    }
  };
  protoOf(SlotReader).c13 = function () {
    if (this.z10_1 <= 0) {
      // Inline function 'androidx.compose.runtime.requirePrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isNode(this.p10_1, this.v10_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        var tmp$ret$0 = 'Expected a node group';
        throwIllegalArgumentException(tmp$ret$0);
      }
      this.b13();
    }
  };
  protoOf(SlotReader).j12 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.z10_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      var tmp$ret$0 = 'Cannot skip while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var count = isNode(this.p10_1, this.v10_1) ? 1 : nodeCount(this.p10_1, this.v10_1);
    this.v10_1 = this.v10_1 + groupSize(this.p10_1, this.v10_1) | 0;
    return count;
  };
  protoOf(SlotReader).u12 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.z10_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      var tmp$ret$0 = 'Cannot skip the enclosing group while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.v10_1 = this.w10_1;
    this.a11_1 = 0;
    this.b11_1 = 0;
  };
  protoOf(SlotReader).e14 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.z10_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      var tmp$ret$0 = 'Cannot reposition while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.v10_1 = index;
    var parent = index < this.q10_1 ? parentAnchor(this.p10_1, index) : -1;
    this.x10_1 = parent;
    if (parent < 0)
      this.w10_1 = this.q10_1;
    else
      this.w10_1 = parent + groupSize(this.p10_1, parent) | 0;
    this.a11_1 = 0;
    this.b11_1 = 0;
  };
  protoOf(SlotReader).f15 = function (index) {
    var newCurrentEnd = index + groupSize(this.p10_1, index) | 0;
    var current = this.v10_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(current >= index && current <= newCurrentEnd)) {
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      var tmp$ret$0 = 'Index ' + index + ' is not a parent of ' + current;
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.x10_1 = index;
    this.w10_1 = newCurrentEnd;
    this.a11_1 = 0;
    this.b11_1 = 0;
  };
  protoOf(SlotReader).w14 = function () {
    if (this.z10_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.v10_1 === this.w10_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        var tmp$ret$0 = 'endGroup() not called at the end of a group';
        composeImmediateRuntimeError(tmp$ret$0);
      }
      var parent = parentAnchor(this.p10_1, this.x10_1);
      this.x10_1 = parent;
      this.w10_1 = parent < 0 ? this.q10_1 : parent + groupSize(this.p10_1, parent) | 0;
      var currentSlotStack = this.y10_1;
      var newCurrentSlot = currentSlotStack.e11();
      if (newCurrentSlot < 0) {
        this.a11_1 = 0;
        this.b11_1 = 0;
      } else {
        this.a11_1 = newCurrentSlot;
        this.b11_1 = parent >= (this.q10_1 - 1 | 0) ? this.s10_1 : dataAnchor(this.p10_1, parent + 1 | 0);
      }
    }
  };
  protoOf(SlotReader).r13 = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    if (this.z10_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.v10_1;
    while (childIndex < this.w10_1) {
      var tmp = key(this.p10_1, childIndex);
      var tmp_0 = objectKey(this.p10_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.p10_1, childIndex) ? 1 : nodeCount(this.p10_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.d(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.p10_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.v10_1 + ', key=' + this.q13() + ', ' + ('parent=' + this.x10_1 + ', end=' + this.w10_1 + ')');
  };
  protoOf(SlotReader).n12 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.o10_1.mz_1;
    var effectiveSize = this.q10_1;
    var location = search$accessor$n8vbwb(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.d1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.o(location);
    }
    return tmp;
  };
  function find(_this__u8e3s4, index, effectiveSize) {
    var location = search$accessor$n8vbwb(_this__u8e3s4, index, effectiveSize);
    return location >= 0 ? _this__u8e3s4.o(location) : null;
  }
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.i() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      var it = _this__u8e3s4.o(mid).v16_1;
      var midVal = it < 0 ? effectiveSize + it | 0 : it;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function slotAnchor(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 28) | 0;
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 30) | 0;
  }
  function auxIndex_0(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    var slot = imul(address, 5);
    return slot >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 29) | 0;
  }
  function validateRead($this) {
    if (!($this.h1m_1.lz_1 === $this.k1m_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.h1m_1 = table;
    this.i1m_1 = end;
    this.j1m_1 = start;
    this.k1m_1 = this.h1m_1.lz_1;
    if (this.h1m_1.kz_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).g = function () {
    return this.j1m_1 < this.i1m_1;
  };
  protoOf(GroupIterator).h = function () {
    validateRead(this);
    var group = this.j1m_1;
    this.j1m_1 = this.j1m_1 + groupSize(this.h1m_1.ez_1, group) | 0;
    return new SlotTableGroup(this.h1m_1, group, this.k1m_1);
  };
  function validateRead_0($this) {
    if (!($this.l1m_1.lz_1 === $this.n1m_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.lz_1 : version;
    this.l1m_1 = table;
    this.m1m_1 = group;
    this.n1m_1 = version;
  }
  protoOf(SlotTableGroup).f = function () {
    validateRead_0(this);
    var tmp0_safe_receiver = this.l1m_1.i1k(this.m1m_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTableGroup.iterator.<anonymous>' call
      tmp = new SourceInformationGroupIterator(this.l1m_1, this.m1m_1, tmp0_safe_receiver, new AnchoredGroupPath(this.m1m_1));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? new GroupIterator(this.l1m_1, this.m1m_1 + 1 | 0, this.m1m_1 + groupSize(this.l1m_1.ez_1, this.m1m_1) | 0) : tmp1_elvis_lhs;
  };
  function add_0(_this__u8e3s4, key, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.o(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableIntSet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.add.<anonymous>' call
      _this__u8e3s4.yq(key, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.kq(value);
  }
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 && value < 67108863);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet(list) {
    var tmp;
    if (list === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = list;
    }
    list = tmp;
    this.y1k_1 = list;
  }
  protoOf(PrioritySet).a1l = function (value) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.y1k_1.p()) {
      tmp = this.y1k_1.o(0) === value || this.y1k_1.o(this.y1k_1.i() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_instance;
    var index = this.y1k_1.i();
    this.y1k_1.d(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.y1k_1.o(parent);
      if (value > parentValue) {
        this.y1k_1.c1(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.y1k_1.c1(index, value);
  };
  protoOf(PrioritySet).au = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.y1k_1.p();
  };
  protoOf(PrioritySet).t18 = function () {
    return first(this.y1k_1);
  };
  protoOf(PrioritySet).z1k = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.y1k_1.i() > 0)) {
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      var tmp$ret$0 = 'Set is empty';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var value = this.y1k_1.o(0);
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.y1k_1.p()) {
        tmp = this.y1k_1.o(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.y1k_1.c1(0, last(this.y1k_1));
      this.y1k_1.e1(this.y1k_1.i() - 1 | 0);
      var index = 0;
      var size = this.y1k_1.i();
      var max = this.y1k_1.i() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.y1k_1.o(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.y1k_1.o(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.y1k_1.o(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.y1k_1.c1(index, rightValue);
              this.y1k_1.c1(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.y1k_1.c1(index, leftValue);
          this.y1k_1.c1(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    var it = search$accessor$n8vbwb(_this__u8e3s4, index, effectiveSize);
    return it >= 0 ? it : -(it + 1 | 0) | 0;
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function countOneBits_0(value) {
    switch (value) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.v13_1 = key;
    this.w13_1 = objectKey;
    this.x13_1 = location;
    this.y13_1 = nodes;
    this.z13_1 = index;
  }
  function SourceInformationGroupIterator(table, parent, group, path) {
    this.o1m_1 = table;
    this.p1m_1 = parent;
    this.q1m_1 = group;
    this.r1m_1 = path;
    this.s1m_1 = this.o1m_1.lz_1;
    this.t1m_1 = 0;
  }
  protoOf(SourceInformationGroupIterator).g = function () {
    var tmp0_safe_receiver = this.q1m_1.n1k_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SourceInformationGroupIterator.hasNext.<anonymous>' call
      tmp = this.t1m_1 < tmp0_safe_receiver.i();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(SourceInformationGroupIterator).h = function () {
    var tmp2_safe_receiver = this.q1m_1.n1k_1;
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp1 = this.t1m_1;
      this.t1m_1 = tmp1 + 1 | 0;
      tmp = tmp2_safe_receiver.o(tmp1);
    }
    var group = tmp;
    var tmp_0;
    if (group instanceof Anchor) {
      tmp_0 = new SlotTableGroup(this.o1m_1, group.v16_1, this.s1m_1);
    } else {
      if (group instanceof GroupSourceInformation) {
        tmp_0 = new SourceInformationSlotTableGroup(this.o1m_1, this.p1m_1, group, new RelativeGroupPath(this.r1m_1, this.t1m_1 - 1 | 0));
      } else {
        composeRuntimeError('Unexpected group information structure');
      }
    }
    return tmp_0;
  };
  function AnchoredGroupPath(group) {
    SourceInformationGroupPath.call(this);
    this.u1m_1 = group;
  }
  function SourceInformationGroupPath() {
  }
  function SourceInformationSlotTableGroup(table, parent, sourceInformation, identityPath) {
    this.v1m_1 = table;
    this.w1m_1 = parent;
    this.x1m_1 = sourceInformation;
    this.y1m_1 = identityPath;
    this.z1m_1 = this.x1m_1.k1k_1;
    this.a1n_1 = this;
  }
  protoOf(SourceInformationSlotTableGroup).f = function () {
    return new SourceInformationGroupIterator(this.v1m_1, this.w1m_1, this.x1m_1, this.y1m_1);
  };
  function RelativeGroupPath(parent, index) {
    SourceInformationGroupPath.call(this);
    this.b1n_1 = parent;
    this.c1n_1 = index;
  }
  function search$accessor$n8vbwb(_this__u8e3s4, location, effectiveSize) {
    return search(_this__u8e3s4, location, effectiveSize);
  }
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_instance;
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
  }
  protoOf(StructuralEqualityPolicy).e1n = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).n1f = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.e1n(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    return StructuralEqualityPolicy_instance;
  }
  function mutableStateOf(value, policy) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return createSnapshotMutableState(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.h1n_1 = myValue;
  }
  protoOf(StateStateRecord).i1n = function (value) {
    var tmp = this;
    tmp.h1n_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).h1n_1;
  };
  protoOf(StateStateRecord).j1n = function () {
    return new StateStateRecord(this.h1n_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    StateObjectImpl.call(this);
    this.l1n_1 = policy;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new StateStateRecord(value);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.next.<anonymous>' call
    if (Companion_instance_11.p1n()) {
      var tmp_0 = this_0;
      // Inline function 'kotlin.also' call
      var this_1 = new StateStateRecord(value);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.next.<anonymous>.<anonymous>' call
      this_1.n1n_1 = 1;
      tmp_0.o1n_1 = this_1;
    }
    tmp.m1n_1 = this_0;
  }
  protoOf(SnapshotMutableStateImpl).a1f = function () {
    return this.l1n_1;
  };
  protoOf(SnapshotMutableStateImpl).mn = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.m1n_1;
    var it = current(this_0);
    if (!this.a1f().n1f(it.h1n_1, value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var this_1 = this.m1n_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_instance_11.rv();
      overwritableRecord(this_1, this, snapshot, it).h1n_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
    }
    return Unit_instance;
  };
  protoOf(SnapshotMutableStateImpl).i1 = function () {
    return readable_0(this.m1n_1, this).h1n_1;
  };
  protoOf(SnapshotMutableStateImpl).q1n = function () {
    return this.m1n_1;
  };
  protoOf(SnapshotMutableStateImpl).r1n = function (value) {
    var tmp = this;
    tmp.m1n_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).s1n = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.a1f().n1f(currentRecord.h1n_1, appliedRecord.h1n_1)) {
      tmp = current;
    } else {
      var merged = this.a1f().d1n(previousRecord.h1n_1, currentRecord.h1n_1, appliedRecord.h1n_1);
      var tmp_0;
      if (!(merged == null)) {
        // Inline function 'kotlin.also' call
        var this_0 = appliedRecord.j1n();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (this_0 instanceof StateStateRecord ? this_0 : THROW_CCE()).h1n_1 = merged;
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.m1n_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    var it = current(this_0);
    return 'MutableState(value=' + toString_0(it.h1n_1) + ')@' + hashCode(this);
  };
  function SnapshotThreadLocal() {
    this.b1f_1 = new AtomicReference(get_emptyThreadMap());
    this.c1f_1 = new Object();
  }
  protoOf(SnapshotThreadLocal).xi = function () {
    var tmp = this.b1f_1.xi().w1n(currentThreadId());
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).d1f = function (value) {
    var key = currentThreadId();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.c1f_1;
    var current = this.b1f_1.xi();
    if (current.x1n(key, value))
      return Unit_instance;
    this.b1f_1.m1e(current.y1n(key, value));
  };
  function IntStack() {
    this.sz_1 = new Int32Array(10);
    this.tz_1 = 0;
  }
  protoOf(IntStack).i = function () {
    return this.tz_1;
  };
  protoOf(IntStack).uz = function (value) {
    if (this.tz_1 >= this.sz_1.length) {
      this.sz_1 = copyOf(this.sz_1, imul(this.sz_1.length, 2));
    }
    var tmp = this.sz_1;
    var tmp1 = this.tz_1;
    this.tz_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).e11 = function () {
    var tmp = this.sz_1;
    this.tz_1 = this.tz_1 - 1 | 0;
    return tmp[this.tz_1];
  };
  protoOf(IntStack).i1l = function (default_0) {
    return this.tz_1 > 0 ? this.t18() : default_0;
  };
  protoOf(IntStack).t18 = function () {
    return this.sz_1[this.tz_1 - 1 | 0];
  };
  protoOf(IntStack).h14 = function () {
    return this.sz_1[this.tz_1 - 2 | 0];
  };
  protoOf(IntStack).g15 = function (index) {
    return this.sz_1[index];
  };
  protoOf(IntStack).p = function () {
    return this.tz_1 === 0;
  };
  protoOf(IntStack).b1 = function () {
    this.tz_1 = 0;
  };
  protoOf(IntStack).h1l = function (value) {
    var inductionVariable = 0;
    var last = this.tz_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.sz_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.f11_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).i = function () {
    return this.f11_1.i();
  };
  protoOf(Stack).g14 = function (value) {
    return this.f11_1.d(value);
  };
  protoOf(Stack).e11 = function () {
    return this.f11_1.e1(this.i() - 1 | 0);
  };
  protoOf(Stack).t18 = function () {
    return this.f11_1.o(this.i() - 1 | 0);
  };
  protoOf(Stack).g15 = function (index) {
    return this.f11_1.o(index);
  };
  protoOf(Stack).p = function () {
    return this.f11_1.p();
  };
  protoOf(Stack).au = function () {
    return !this.p();
  };
  protoOf(Stack).b1 = function () {
    return this.f11_1.b1();
  };
  protoOf(Stack).c4 = function () {
    var tmp = 0;
    var tmp_0 = this.f11_1.i();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = this.f11_1.o(tmp_2);
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  function _get_current__qcrdxk($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.z1n_1;
    current$factory();
    return this_0.i1();
  }
  function LazyValueHolder(valueProducer) {
    this.z1n_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).z1e = function (map) {
    return _get_current__qcrdxk(this);
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function ChangeList() {
    OperationsDebugStringFormattable.call(this);
    this.f1a_1 = new Operations();
  }
  protoOf(ChangeList).p = function () {
    return this.f1a_1.p();
  };
  protoOf(ChangeList).au = function () {
    return this.f1a_1.au();
  };
  protoOf(ChangeList).b1 = function () {
    this.f1a_1.b1();
  };
  protoOf(ChangeList).t1c = function (applier, slots, rememberManager) {
    return this.f1a_1.i1o(applier, slots, rememberManager);
  };
  protoOf(ChangeList).j1o = function (value) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.f1a_1;
    var operation = Remember_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemember.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    Remember_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).p1o = function (value, groupSlotIndex) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.f1a_1;
    var operation = UpdateValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    UpdateValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    UpdateValue_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, groupSlotIndex);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).q1o = function (value, anchor, groupSlotIndex) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.f1a_1;
    var operation = UpdateAnchoredValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateAnchoredValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, anchor);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$2, groupSlotIndex);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).r1o = function (anchor, value) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.f1a_1;
    var operation = AppendValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushAppendValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    AppendValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
    AppendValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, value);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).s1o = function (count) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.f1a_1;
    var operation = TrimParentValues_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushTrimValues.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    TrimParentValues_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, count);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).t1o = function () {
    this.f1a_1.u1o(ResetSlots_getInstance());
  };
  protoOf(ChangeList).v1o = function (data) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.f1a_1;
    var operation = UpdateAuxData_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateAuxData.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    UpdateAuxData_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, data);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).w1o = function () {
    this.f1a_1.u1o(EnsureRootGroupStarted_getInstance());
  };
  protoOf(ChangeList).x1o = function (anchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.f1a_1;
    var operation = EnsureGroupStarted_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEnsureGroupStarted.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    EnsureGroupStarted_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).y1o = function () {
    this.f1a_1.u1o(EndCurrentGroup_getInstance());
  };
  protoOf(ChangeList).z1o = function () {
    this.f1a_1.u1o(SkipToEndOfCurrentGroup_getInstance());
  };
  protoOf(ChangeList).a1p = function () {
    this.f1a_1.u1o(RemoveCurrentGroup_getInstance());
  };
  protoOf(ChangeList).b1p = function (anchor, from) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.f1a_1;
    var operation = InsertSlots_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushInsertSlots.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    InsertSlots_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    InsertSlots_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).c1p = function (anchor, from, fixups) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.f1a_1;
    var operation = InsertSlotsWithFixups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushInsertSlots.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, fixups);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).d1p = function (offset) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.f1a_1;
    var operation = MoveCurrentGroup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveCurrentGroup.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    MoveCurrentGroup_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, offset);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).e1p = function (action, composition) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.f1a_1;
    var operation = EndCompositionScope_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEndCompositionScope.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    EndCompositionScope_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, action);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    EndCompositionScope_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, composition);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).f1p = function (node) {
    if (!(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false) {
      this.f1a_1.u1o(UseCurrentNode_getInstance());
    }
  };
  protoOf(ChangeList).g1p = function (value, block) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.f1a_1;
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp, typeof block === 'function' ? block : THROW_CCE());
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).h1p = function (removeFrom, moveCount) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.f1a_1;
    var operation = RemoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemoveNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    RemoveNode_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, removeFrom);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    RemoveNode_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, moveCount);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).i1p = function (to, from, count) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.f1a_1;
    var operation = MoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    MoveNode_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(1);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, to);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    MoveNode_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    MoveNode_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$2, count);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).j1p = function (distance) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.f1a_1;
    var operation = AdvanceSlotsBy_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushAdvanceSlotsBy.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    AdvanceSlotsBy_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, distance);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).k1p = function (count) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.f1a_1;
    var operation = Ups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUps.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    Ups_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, count);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).l1p = function (nodes) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(nodes.length === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.f1a_1;
      var operation = Downs_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.k1o(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDowns.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
      Downs_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, nodes);
      // Inline function 'androidx.compose.runtime.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.l1o_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.g1o_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.w6(', ');
              }
              this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_1.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_2 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.m1o_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.h1o_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.w6(', ');
              }
              this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_2.toString();
        var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throwIllegalStateException(tmp$ret$7);
      }
    }
  };
  protoOf(ChangeList).m1p = function (effectiveNodeIndexOut, anchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.f1a_1;
    var operation = DetermineMovableContentNodeIndex_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDetermineMovableContentNodeIndex.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, effectiveNodeIndexOut);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, anchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).n1p = function (nodes, effectiveNodeIndex) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!nodes.p()) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.f1a_1;
      var operation = CopyNodesToNewAnchorLocation_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.k1o(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushCopyNodesToNewAnchorLocation.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, nodes);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, effectiveNodeIndex);
      // Inline function 'androidx.compose.runtime.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.l1o_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.g1o_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.w6(', ');
              }
              this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_1.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_2 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.m1o_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.h1o_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.w6(', ');
              }
              this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_2.toString();
        var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throwIllegalStateException(tmp$ret$7);
      }
    }
  };
  protoOf(ChangeList).o1p = function (resolvedState, parentContext, from, to) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.f1a_1;
    var operation = CopySlotTableToAnchorLocation_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushCopySlotTableToAnchorLocation.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, resolvedState);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, parentContext);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(3);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, to);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$3, from);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$8 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$8);
    }
  };
  protoOf(ChangeList).p1p = function (composition, parentContext, reference) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.f1a_1;
    var operation = ReleaseMovableGroupAtCurrent_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushReleaseMovableGroupAtCurrent.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, composition);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, parentContext);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, reference);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).q1p = function () {
    this.f1a_1.u1o(EndMovableContentPlacement_getInstance());
  };
  protoOf(ChangeList).r1p = function (changeList, effectiveNodeIndex) {
    if (changeList.au()) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.f1a_1;
      var operation = ApplyChangeList_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.k1o(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushExecuteOperationsIn.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
      ApplyChangeList_getInstance();
      var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, changeList);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      ApplyChangeList_getInstance();
      var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, effectiveNodeIndex);
      // Inline function 'androidx.compose.runtime.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.l1o_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.g1o_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.w6(', ');
              }
              this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_1.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_2 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.m1o_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.h1o_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.w6(', ');
              }
              this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_2.toString();
        var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throwIllegalStateException(tmp$ret$6);
      }
    }
  };
  function _get_reader__fd8dw8($this) {
    return $this.b10_1.ty_1;
  }
  function pushApplierOperationPreamble($this) {
    pushPendingUpsAndDowns($this);
  }
  function pushSlotEditingOperationPreamble($this) {
    realizeOperationLocation$default($this);
    $this.x17();
  }
  function pushSlotTableOperationPreamble($this, useParentSlot) {
    realizeOperationLocation($this, useParentSlot);
  }
  function pushSlotTableOperationPreamble$default($this, useParentSlot, $super) {
    useParentSlot = useParentSlot === VOID ? false : useParentSlot;
    return pushSlotTableOperationPreamble($this, useParentSlot);
  }
  function ensureRootStarted($this) {
    if (!$this.d10_1 && $this.f10_1) {
      pushSlotTableOperationPreamble$default($this);
      $this.c10_1.w1o();
      $this.d10_1 = true;
    }
  }
  function ensureGroupStarted($this, anchor) {
    pushSlotTableOperationPreamble$default($this);
    $this.c10_1.x1o(anchor);
    $this.d10_1 = true;
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? _get_reader__fd8dw8($this).x10_1 : _get_reader__fd8dw8($this).v10_1;
    var distance = location - $this.g10_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(distance >= 0)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.realizeOperationLocation.<anonymous>' call
      var tmp$ret$0 = 'Tried to seek backward';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    if (distance > 0) {
      $this.c10_1.j1p(distance);
      $this.g10_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function realizeNodeMovementOperations($this) {
    if ($this.m10_1 > 0) {
      if ($this.j10_1 >= 0) {
        realizeRemoveNode($this, $this.j10_1, $this.m10_1);
        $this.j10_1 = -1;
      } else {
        realizeMoveNode($this, $this.l10_1, $this.k10_1, $this.m10_1);
        $this.k10_1 = -1;
        $this.l10_1 = -1;
      }
      $this.m10_1 = 0;
    }
  }
  function realizeRemoveNode($this, removeFrom, moveCount) {
    pushApplierOperationPreamble($this);
    $this.c10_1.h1p(removeFrom, moveCount);
  }
  function realizeMoveNode($this, to, from, count) {
    pushApplierOperationPreamble($this);
    $this.c10_1.i1p(to, from, count);
  }
  function pushPendingUpsAndDowns($this) {
    if ($this.h10_1 > 0) {
      $this.c10_1.k1p($this.h10_1);
      $this.h10_1 = 0;
    }
    if ($this.i10_1.au()) {
      $this.c10_1.l1p($this.i10_1.c4());
      $this.i10_1.b1();
    }
  }
  function Companion_4() {
    this.s1p_1 = -2;
  }
  var Companion_instance_5;
  function Companion_getInstance_4() {
    return Companion_instance_5;
  }
  function ComposerChangeListWriter(composer, changeList) {
    this.b10_1 = composer;
    this.c10_1 = changeList;
    this.d10_1 = false;
    this.e10_1 = new IntStack();
    this.f10_1 = true;
    this.g10_1 = 0;
    this.h10_1 = 0;
    this.i10_1 = new Stack();
    this.j10_1 = -1;
    this.k10_1 = -1;
    this.l10_1 = -1;
    this.m10_1 = 0;
  }
  protoOf(ComposerChangeListWriter).d14 = function (location) {
    this.g10_1 = this.g10_1 + (location - _get_reader__fd8dw8(this).v10_1 | 0) | 0;
  };
  protoOf(ComposerChangeListWriter).i16 = function (location) {
    this.g10_1 = location;
  };
  protoOf(ComposerChangeListWriter).x17 = function () {
    if (_get_reader__fd8dw8(this).i() > 0) {
      var reader = _get_reader__fd8dw8(this);
      var location = reader.x10_1;
      if (!(this.e10_1.i1l(-2) === location)) {
        ensureRootStarted(this);
        if (location > 0) {
          var anchor = reader.n12(location);
          this.e10_1.uz(location);
          ensureGroupStarted(this, anchor);
        }
      }
    }
  };
  protoOf(ComposerChangeListWriter).k19 = function () {
    return (_get_reader__fd8dw8(this).x10_1 - this.g10_1 | 0) < 0;
  };
  protoOf(ComposerChangeListWriter).n19 = function (value) {
    this.c10_1.j1o(value);
  };
  protoOf(ComposerChangeListWriter).i19 = function (value, groupSlotIndex) {
    pushSlotTableOperationPreamble(this, true);
    this.c10_1.p1o(value, groupSlotIndex);
  };
  protoOf(ComposerChangeListWriter).j19 = function (value, anchor, groupSlotIndex) {
    this.c10_1.q1o(value, anchor, groupSlotIndex);
  };
  protoOf(ComposerChangeListWriter).g19 = function (anchor, value) {
    this.c10_1.r1o(anchor, value);
  };
  protoOf(ComposerChangeListWriter).u14 = function (count) {
    if (count > 0) {
      pushSlotEditingOperationPreamble(this);
      this.c10_1.s1o(count);
    }
  };
  protoOf(ComposerChangeListWriter).u15 = function () {
    this.c10_1.t1o();
  };
  protoOf(ComposerChangeListWriter).z12 = function (data) {
    pushSlotTableOperationPreamble$default(this);
    this.c10_1.v1o(data);
  };
  protoOf(ComposerChangeListWriter).n10 = function () {
    if (this.d10_1) {
      pushSlotTableOperationPreamble$default(this);
      pushSlotTableOperationPreamble$default(this);
      this.c10_1.y1o();
      this.d10_1 = false;
    }
  };
  protoOf(ComposerChangeListWriter).v14 = function () {
    var location = _get_reader__fd8dw8(this).x10_1;
    var currentStartedGroup = this.e10_1.i1l(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(currentStartedGroup <= location)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.endCurrentGroup.<anonymous>' call
      var tmp$ret$0 = 'Missed recording an endGroup';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    if (this.e10_1.i1l(-1) === location) {
      pushSlotTableOperationPreamble$default(this);
      this.e10_1.e11();
      this.c10_1.y1o();
    }
  };
  protoOf(ComposerChangeListWriter).k16 = function () {
    this.c10_1.z1o();
  };
  protoOf(ComposerChangeListWriter).f17 = function () {
    pushSlotEditingOperationPreamble(this);
    this.c10_1.a1p();
    this.g10_1 = this.g10_1 + _get_reader__fd8dw8(this).g1m() | 0;
  };
  protoOf(ComposerChangeListWriter).e17 = function (anchor, from) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    realizeNodeMovementOperations(this);
    this.c10_1.b1p(anchor, from);
  };
  protoOf(ComposerChangeListWriter).d17 = function (anchor, from, fixups) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    realizeNodeMovementOperations(this);
    this.c10_1.c1p(anchor, from, fixups);
  };
  protoOf(ComposerChangeListWriter).f14 = function (offset) {
    pushSlotEditingOperationPreamble(this);
    this.c10_1.d1p(offset);
  };
  protoOf(ComposerChangeListWriter).u19 = function (action, composition) {
    this.c10_1.e1p(action, composition);
  };
  protoOf(ComposerChangeListWriter).w18 = function (node) {
    pushApplierOperationPreamble(this);
    this.c10_1.f1p(node);
  };
  protoOf(ComposerChangeListWriter).z18 = function (value, block) {
    pushApplierOperationPreamble(this);
    this.c10_1.g1p(value, block);
  };
  protoOf(ComposerChangeListWriter).j14 = function (nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(nodeIndex >= 0)) {
        // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.removeNode.<anonymous>' call
        var tmp$ret$0 = 'Invalid remove index ' + nodeIndex;
        composeImmediateRuntimeError(tmp$ret$0);
      }
      if (this.j10_1 === nodeIndex) {
        this.m10_1 = this.m10_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.j10_1 = nodeIndex;
        this.m10_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).n14 = function (from, to, count) {
    if (count > 0) {
      if (this.m10_1 > 0 && this.k10_1 === (from - this.m10_1 | 0) && this.l10_1 === (to - this.m10_1 | 0)) {
        this.m10_1 = this.m10_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.k10_1 = from;
        this.l10_1 = to;
        this.m10_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).g17 = function () {
    pushPendingUpsAndDowns(this);
    if (this.d10_1) {
      this.k16();
      this.n10();
    }
  };
  protoOf(ComposerChangeListWriter).p14 = function () {
    realizeNodeMovementOperations(this);
  };
  protoOf(ComposerChangeListWriter).z17 = function (nodeIndex, group) {
    this.p14();
    pushPendingUpsAndDowns(this);
    var nodeCount = _get_reader__fd8dw8(this).h15(group) ? 1 : _get_reader__fd8dw8(this).i15(group);
    if (nodeCount > 0) {
      this.j14(nodeIndex, nodeCount);
    }
  };
  protoOf(ComposerChangeListWriter).s14 = function () {
    realizeNodeMovementOperations(this);
    if (this.i10_1.au()) {
      this.i10_1.e11();
    } else {
      this.h10_1 = this.h10_1 + 1 | 0;
    }
  };
  protoOf(ComposerChangeListWriter).k15 = function (node) {
    realizeNodeMovementOperations(this);
    this.i10_1.g14(node);
  };
  protoOf(ComposerChangeListWriter).d16 = function (effectiveNodeIndexOut, anchor) {
    pushPendingUpsAndDowns(this);
    this.c10_1.m1p(effectiveNodeIndexOut, anchor);
  };
  protoOf(ComposerChangeListWriter).g16 = function (nodes, effectiveNodeIndex) {
    this.c10_1.n1p(nodes, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).h16 = function (resolvedState, parentContext, from, to) {
    this.c10_1.o1p(resolvedState, parentContext, from, to);
  };
  protoOf(ComposerChangeListWriter).y17 = function (composition, parentContext, reference) {
    this.c10_1.p1p(composition, parentContext, reference);
  };
  protoOf(ComposerChangeListWriter).l16 = function () {
    this.c10_1.q1p();
    this.g10_1 = 0;
  };
  protoOf(ComposerChangeListWriter).j16 = function (other, effectiveNodeIndex) {
    this.c10_1.r1p(other, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).i17 = function () {
    pushPendingUpsAndDowns(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.e10_1.p()) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.finalizeComposition.<anonymous>' call
      var tmp$ret$0 = 'Missed recording an endGroup()';
      composeImmediateRuntimeError(tmp$ret$0);
    }
  };
  protoOf(ComposerChangeListWriter).j17 = function () {
    this.d10_1 = false;
    this.e10_1.b1();
    this.g10_1 = 0;
  };
  function FixupList() {
    OperationsDebugStringFormattable.call(this);
    this.g11_1 = new Operations();
    this.h11_1 = new Operations();
  }
  protoOf(FixupList).p = function () {
    return this.g11_1.p();
  };
  protoOf(FixupList).b1 = function () {
    this.h11_1.b1();
    this.g11_1.b1();
  };
  protoOf(FixupList).t1p = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.h11_1.p()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.executeAndFlushAllPendingFixups.<anonymous>' call
      var tmp$ret$0 = 'FixupList has pending fixup operations that were not realized. Were there mismatched insertNode() and endNodeInsert() calls?';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.g11_1.i1o(applier, slots, rememberManager);
  };
  protoOf(FixupList).u18 = function (factory, insertIndex, groupAnchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.g11_1;
    var operation = InsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.createAndInsertNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    InsertNodeFixup_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, factory);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    InsertNodeFixup_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, insertIndex);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    InsertNodeFixup_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, groupAnchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_3 = this.h11_1;
    var operation_0 = PostInsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_3.k1o(operation_0);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.createAndInsertNode.<anonymous>' call
    var $this$push_0 = _WriteScope___init__impl__4xwato(this_3);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    PostInsertNodeFixup_getInstance();
    var tmp$ret$8 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push_0, tmp$ret$8, insertIndex);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    PostInsertNodeFixup_getInstance();
    var tmp$ret$9 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push_0, tmp$ret$9, groupAnchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_3.g1o_1 === createExpectedArgMask(this_3, operation_0.l1o_1) && this_3.h1o_1 === createExpectedArgMask(this_3, operation_0.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_4 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_1 = operation_0.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      if (inductionVariable_1 < times_1)
        do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_1 & this_3.g1o_1) === 0)) {
            if (missingIntCount_0 > 0) {
              this_4.w6(', ');
            }
            this_4.w6(operation_0.n1o(_IntParameter___init__impl__oy5xkp(index_1)));
            missingIntCount_0 = missingIntCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_1 < times_1);
      var missingInts_0 = this_4.toString();
      var missingObjectCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_5 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_2 = operation_0.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < times_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_2 & this_3.h1o_1) === 0)) {
            if (missingIntCount_0 > 0) {
              this_5.w6(', ');
            }
            this_5.w6(operation_0.o1o(_ObjectParameter___init__impl__iyg1ip(index_2)));
            missingObjectCount_0 = missingObjectCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_2 < times_2);
      var missingObjects_0 = this_5.toString();
      var tmp$ret$14 = 'Error while pushing ' + operation_0.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount_0 + ' int arguments (' + missingInts_0 + ') ') + ('and ' + missingObjectCount_0 + ' object arguments (' + missingObjects_0 + ').');
      throwIllegalStateException(tmp$ret$14);
    }
  };
  protoOf(FixupList).x14 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.h11_1.au()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.endNodeInsert.<anonymous>' call
      var tmp$ret$0 = 'Cannot end node insertion, there are no pending operations that can be realized.';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.h11_1.u1p(this.g11_1);
  };
  protoOf(FixupList).a19 = function (value, block) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.g11_1;
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k1o(operation);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.updateNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp, typeof block === 'function' ? block : THROW_CCE());
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g1o_1 === createExpectedArgMask(this_0, operation.l1o_1) && this_0.h1o_1 === createExpectedArgMask(this_0, operation.m1o_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w6(', ');
            }
            this_1.w6(operation.n1o(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m1o_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h1o_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w6(', ');
            }
            this_2.w6(operation.o1o(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  function _IntParameter___init__impl__oy5xkp(offset) {
    return offset;
  }
  function _IntParameter___get_offset__impl__xsdcin($this) {
    return $this;
  }
  function _ObjectParameter___init__impl__iyg1ip(offset) {
    return offset;
  }
  function _ObjectParameter___get_offset__impl__x7fx93($this) {
    return $this;
  }
  function Ups() {
    Ups_instance = this;
    Operation.call(this, 1);
  }
  protoOf(Ups).n1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'count';
    } else {
      tmp = protoOf(Operation).n1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Ups).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var times = _this__u8e3s4.y1p(tmp$ret$0);
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Ups.execute.<anonymous>' call
        applier.vv();
      }
       while (inductionVariable < times);
  };
  var Ups_instance;
  function Ups_getInstance() {
    if (Ups_instance == null)
      new Ups();
    return Ups_instance;
  }
  function Downs() {
    Downs_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Downs).o1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'nodes';
    } else {
      tmp = protoOf(Operation).o1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Downs).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var nodes = _this__u8e3s4.c1q(tmp$ret$0);
    var inductionVariable = 0;
    var last = nodes.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        nodeApplier.uv(nodes[index]);
      }
       while (inductionVariable <= last);
  };
  var Downs_instance;
  function Downs_getInstance() {
    if (Downs_instance == null)
      new Downs();
    return Downs_instance;
  }
  function AdvanceSlotsBy() {
    AdvanceSlotsBy_instance = this;
    Operation.call(this, 1);
  }
  protoOf(AdvanceSlotsBy).n1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'distance';
    } else {
      tmp = protoOf(Operation).n1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(AdvanceSlotsBy).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.r1k(_this__u8e3s4.y1p(tmp$ret$0));
  };
  var AdvanceSlotsBy_instance;
  function AdvanceSlotsBy_getInstance() {
    if (AdvanceSlotsBy_instance == null)
      new AdvanceSlotsBy();
    return AdvanceSlotsBy_instance;
  }
  function Remember() {
    Remember_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Remember).o1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).o1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Remember).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    rememberManager.e1d(_this__u8e3s4.c1q(tmp$ret$0));
  };
  var Remember_instance;
  function Remember_getInstance() {
    if (Remember_instance == null)
      new Remember();
    return Remember_instance;
  }
  function AppendValue() {
    AppendValue_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(AppendValue).o1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'value';
      } else {
        tmp = protoOf(Operation).o1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(AppendValue).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.c1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var value = _this__u8e3s4.c1q(tmp$ret$1);
    if (value instanceof RememberObserverHolder) {
      rememberManager.e1d(value.c19_1);
    }
    slots.m1l(anchor, value);
  };
  var AppendValue_instance;
  function AppendValue_getInstance() {
    if (AppendValue_instance == null)
      new AppendValue();
    return AppendValue_instance;
  }
  function TrimParentValues() {
    TrimParentValues_instance = this;
    Operation.call(this, 1);
  }
  protoOf(TrimParentValues).n1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'count';
    } else {
      tmp = protoOf(Operation).n1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(TrimParentValues).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var count = _this__u8e3s4.y1p(tmp$ret$0);
    var slotsSize = slots.n1a();
    // Inline function 'androidx.compose.runtime.SlotWriter.forEachTailSlot' call
    var groupIndex = slots.d12_1;
    var slotsStart = slots.v1k(groupIndex);
    var slotsEnd = slots.v1l(groupIndex);
    // Inline function 'kotlin.math.max' call
    var b = slotsEnd - count | 0;
    var inductionVariable = Math.max(slotsStart, b);
    if (inductionVariable < slotsEnd)
      do {
        var slotIndex = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.execute.<anonymous>' call
        var value = slots.k11_1[dataIndexToDataAddress(slots, slotIndex)];
        if (value instanceof RememberObserverHolder) {
          var endRelativeOrder = slotsSize - slotIndex | 0;
          rememberManager.r1a(value.c19_1, endRelativeOrder, -1, -1);
        } else {
          if (value instanceof RecomposeScopeImpl) {
            value.s1a();
          }
        }
      }
       while (inductionVariable < slotsEnd);
    slots.n1l(count);
  };
  var TrimParentValues_instance;
  function TrimParentValues_getInstance() {
    if (TrimParentValues_instance == null)
      new TrimParentValues();
    return TrimParentValues_instance;
  }
  function UpdateValue() {
    UpdateValue_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(UpdateValue).n1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'groupSlotIndex';
    } else {
      tmp = protoOf(Operation).n1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).o1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).o1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.c1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var groupSlotIndex = _this__u8e3s4.y1p(tmp$ret$1);
    if (value instanceof RememberObserverHolder) {
      rememberManager.e1d(value.c19_1);
    }
    var previous = slots.r1l(groupSlotIndex, value);
    if (previous instanceof RememberObserverHolder) {
      var endRelativeOrder = slots.n1a() - slots.t1l(slots.b12_1, groupSlotIndex) | 0;
      rememberManager.r1a(previous.c19_1, endRelativeOrder, -1, -1);
    } else {
      if (previous instanceof RecomposeScopeImpl) {
        previous.s1a();
      }
    }
  };
  var UpdateValue_instance;
  function UpdateValue_getInstance() {
    if (UpdateValue_instance == null)
      new UpdateValue();
    return UpdateValue_instance;
  }
  function UpdateAnchoredValue() {
    UpdateAnchoredValue_instance = this;
    Operation.call(this, 1, 2);
  }
  protoOf(UpdateAnchoredValue).n1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    UpdateAnchoredValue_getInstance();
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'groupSlotIndex';
    } else {
      tmp = protoOf(Operation).n1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateAnchoredValue).o1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    UpdateAnchoredValue_getInstance();
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
      UpdateAnchoredValue_getInstance();
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'anchor';
      } else {
        tmp = protoOf(Operation).o1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(UpdateAnchoredValue).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.c1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var anchor = _this__u8e3s4.c1q(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    var groupSlotIndex = _this__u8e3s4.y1p(tmp$ret$2);
    if (value instanceof RememberObserverHolder) {
      rememberManager.e1d(value.c19_1);
    }
    var groupIndex = slots.c16(anchor);
    var previous = slots.s1l(groupIndex, groupSlotIndex, value);
    if (previous instanceof RememberObserverHolder) {
      var endRelativeSlotOrder = slots.n1a() - slots.t1l(groupIndex, groupSlotIndex) | 0;
      // Inline function 'androidx.compose.runtime.withAfterAnchorInfo' call
      var anchor_0 = previous.d19_1;
      var priority = -1;
      var endRelativeAfter = -1;
      if (!(anchor_0 == null) && anchor_0.q1a()) {
        priority = slots.c16(anchor_0);
        endRelativeAfter = slots.n1a() - slots.p1a(priority) | 0;
      }
      // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.execute.<anonymous>' call
      var priority_0 = priority;
      var endRelativeAfter_0 = endRelativeAfter;
      rememberManager.r1a(previous.c19_1, endRelativeSlotOrder, priority_0, endRelativeAfter_0);
    } else {
      if (previous instanceof RecomposeScopeImpl) {
        previous.s1a();
      }
    }
  };
  var UpdateAnchoredValue_instance;
  function UpdateAnchoredValue_getInstance() {
    if (UpdateAnchoredValue_instance == null)
      new UpdateAnchoredValue();
    return UpdateAnchoredValue_instance;
  }
  function UpdateAuxData() {
    UpdateAuxData_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(UpdateAuxData).o1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'data';
    } else {
      tmp = protoOf(Operation).o1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateAuxData).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.w1k(_this__u8e3s4.c1q(tmp$ret$0));
  };
  var UpdateAuxData_instance;
  function UpdateAuxData_getInstance() {
    if (UpdateAuxData_instance == null)
      new UpdateAuxData();
    return UpdateAuxData_instance;
  }
  function EnsureRootGroupStarted() {
    EnsureRootGroupStarted_instance = this;
    Operation.call(this);
  }
  protoOf(EnsureRootGroupStarted).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.w1l(0);
  };
  var EnsureRootGroupStarted_instance;
  function EnsureRootGroupStarted_getInstance() {
    if (EnsureRootGroupStarted_instance == null)
      new EnsureRootGroupStarted();
    return EnsureRootGroupStarted_instance;
  }
  function EnsureGroupStarted() {
    EnsureGroupStarted_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(EnsureGroupStarted).o1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      tmp = protoOf(Operation).o1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(EnsureGroupStarted).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.x1l(_this__u8e3s4.c1q(tmp$ret$0));
  };
  var EnsureGroupStarted_instance;
  function EnsureGroupStarted_getInstance() {
    if (EnsureGroupStarted_instance == null)
      new EnsureGroupStarted();
    return EnsureGroupStarted_instance;
  }
  function RemoveCurrentGroup() {
    RemoveCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(RemoveCurrentGroup).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    removeCurrentGroup(slots, rememberManager);
  };
  var RemoveCurrentGroup_instance;
  function RemoveCurrentGroup_getInstance() {
    if (RemoveCurrentGroup_instance == null)
      new RemoveCurrentGroup();
    return RemoveCurrentGroup_instance;
  }
  function MoveCurrentGroup() {
    MoveCurrentGroup_instance = this;
    Operation.call(this, 1);
  }
  protoOf(MoveCurrentGroup).n1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'offset';
    } else {
      tmp = protoOf(Operation).n1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(MoveCurrentGroup).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.z1l(_this__u8e3s4.y1p(tmp$ret$0));
  };
  var MoveCurrentGroup_instance;
  function MoveCurrentGroup_getInstance() {
    if (MoveCurrentGroup_instance == null)
      new MoveCurrentGroup();
    return MoveCurrentGroup_instance;
  }
  function EndCurrentGroup() {
    EndCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(EndCurrentGroup).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.z14();
  };
  var EndCurrentGroup_instance;
  function EndCurrentGroup_getInstance() {
    if (EndCurrentGroup_instance == null)
      new EndCurrentGroup();
    return EndCurrentGroup_instance;
  }
  function SkipToEndOfCurrentGroup() {
    SkipToEndOfCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(SkipToEndOfCurrentGroup).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.u12();
  };
  var SkipToEndOfCurrentGroup_instance;
  function SkipToEndOfCurrentGroup_getInstance() {
    if (SkipToEndOfCurrentGroup_instance == null)
      new SkipToEndOfCurrentGroup();
    return SkipToEndOfCurrentGroup_instance;
  }
  function EndCompositionScope() {
    EndCompositionScope_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(EndCompositionScope).o1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'composition';
      } else {
        tmp = protoOf(Operation).o1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(EndCompositionScope).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var action = _this__u8e3s4.c1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var composition = _this__u8e3s4.c1q(tmp$ret$1);
    action(composition);
  };
  var EndCompositionScope_instance;
  function EndCompositionScope_getInstance() {
    if (EndCompositionScope_instance == null)
      new EndCompositionScope();
    return EndCompositionScope_instance;
  }
  function UseCurrentNode() {
    UseCurrentNode_instance = this;
    Operation.call(this);
  }
  protoOf(UseCurrentNode).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    var tmp = applier.rv();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).ww();
  };
  var UseCurrentNode_instance;
  function UseCurrentNode_getInstance() {
    if (UseCurrentNode_instance == null)
      new UseCurrentNode();
    return UseCurrentNode_instance;
  }
  function UpdateNode() {
    UpdateNode_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(UpdateNode).o1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'block';
      } else {
        tmp = protoOf(Operation).o1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(UpdateNode).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.c1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var block = _this__u8e3s4.c1q(tmp$ret$1);
    block(applier.rv(), value);
  };
  var UpdateNode_instance;
  function UpdateNode_getInstance() {
    if (UpdateNode_instance == null)
      new UpdateNode();
    return UpdateNode_instance;
  }
  function RemoveNode() {
    RemoveNode_instance = this;
    Operation.call(this, 2);
  }
  protoOf(RemoveNode).n1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'removeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'count';
      } else {
        tmp = protoOf(Operation).n1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(RemoveNode).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.y1p(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    applier.yv(tmp, _this__u8e3s4.y1p(tmp$ret$1));
  };
  var RemoveNode_instance;
  function RemoveNode_getInstance() {
    if (RemoveNode_instance == null)
      new RemoveNode();
    return RemoveNode_instance;
  }
  function MoveNode() {
    MoveNode_instance = this;
    Operation.call(this, 3);
  }
  protoOf(MoveNode).n1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'from';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'to';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
        if (parameter === _IntParameter___init__impl__oy5xkp(2)) {
          tmp = 'count';
        } else {
          tmp = protoOf(Operation).n1o.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(MoveNode).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.y1p(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    var tmp_0 = _this__u8e3s4.y1p(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    applier.zv(tmp, tmp_0, _this__u8e3s4.y1p(tmp$ret$2));
  };
  var MoveNode_instance;
  function MoveNode_getInstance() {
    if (MoveNode_instance == null)
      new MoveNode();
    return MoveNode_instance;
  }
  function InsertSlots() {
    InsertSlots_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(InsertSlots).o1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        tmp = protoOf(Operation).o1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertSlots).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.c1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.c1q(tmp$ret$1);
    slots.u13();
    slots.b1m(insertTable, anchor.o19(insertTable), false);
    slots.a15();
  };
  var InsertSlots_instance;
  function InsertSlots_getInstance() {
    if (InsertSlots_instance == null)
      new InsertSlots();
    return InsertSlots_instance;
  }
  function InsertSlotsWithFixups() {
    InsertSlotsWithFixups_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(InsertSlotsWithFixups).o1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'fixups';
        } else {
          tmp = protoOf(Operation).o1o.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(InsertSlotsWithFixups).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.c1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.c1q(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    var fixups = _this__u8e3s4.c1q(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = insertTable.t12();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'kotlin.also' call
      fixups.t1p(applier, writer, rememberManager);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = Unit_instance;
    }finally {
      writer.y12(normalClose);
    }
    slots.u13();
    slots.b1m(insertTable, anchor.o19(insertTable), false);
    slots.a15();
  };
  var InsertSlotsWithFixups_instance;
  function InsertSlotsWithFixups_getInstance() {
    if (InsertSlotsWithFixups_instance == null)
      new InsertSlotsWithFixups();
    return InsertSlotsWithFixups_instance;
  }
  function InsertNodeFixup() {
    InsertNodeFixup_instance = this;
    Operation.call(this, 1, 2);
  }
  protoOf(InsertNodeFixup).n1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).n1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).o1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'factory';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'groupAnchor';
      } else {
        tmp = protoOf(Operation).o1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var node = _this__u8e3s4.c1q(tmp$ret$0)();
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var groupAnchor = _this__u8e3s4.c1q(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.y1p(tmp$ret$2);
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    slots.q1l(groupAnchor, node);
    nodeApplier.wv(insertIndex, node);
    nodeApplier.uv(node);
  };
  var InsertNodeFixup_instance;
  function InsertNodeFixup_getInstance() {
    if (InsertNodeFixup_instance == null)
      new InsertNodeFixup();
    return InsertNodeFixup_instance;
  }
  function PostInsertNodeFixup() {
    PostInsertNodeFixup_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(PostInsertNodeFixup).n1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).n1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).o1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'groupAnchor';
    } else {
      tmp = protoOf(Operation).o1o.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var groupAnchor = _this__u8e3s4.c1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.y1p(tmp$ret$1);
    applier.vv();
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    var nodeToInsert = slots.j1l(groupAnchor);
    nodeApplier.xv(insertIndex, nodeToInsert);
  };
  var PostInsertNodeFixup_instance;
  function PostInsertNodeFixup_getInstance() {
    if (PostInsertNodeFixup_instance == null)
      new PostInsertNodeFixup();
    return PostInsertNodeFixup_instance;
  }
  function ResetSlots() {
    ResetSlots_instance = this;
    Operation.call(this);
  }
  protoOf(ResetSlots).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.l1l();
  };
  var ResetSlots_instance;
  function ResetSlots_getInstance() {
    if (ResetSlots_instance == null)
      new ResetSlots();
    return ResetSlots_instance;
  }
  function DetermineMovableContentNodeIndex() {
    DetermineMovableContentNodeIndex_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(DetermineMovableContentNodeIndex).o1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndexOut';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'anchor';
      } else {
        tmp = protoOf(Operation).o1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(DetermineMovableContentNodeIndex).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndexOut = _this__u8e3s4.c1q(tmp$ret$0);
    var tmp = effectiveNodeIndexOut;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.c1q(tmp$ret$1);
    tmp.z1r_1 = positionToInsert(slots, tmp_0, isInterface(applier, Applier) ? applier : THROW_CCE());
  };
  var DetermineMovableContentNodeIndex_instance;
  function DetermineMovableContentNodeIndex_getInstance() {
    if (DetermineMovableContentNodeIndex_instance == null)
      new DetermineMovableContentNodeIndex();
    return DetermineMovableContentNodeIndex_instance;
  }
  function CopyNodesToNewAnchorLocation() {
    CopyNodesToNewAnchorLocation_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(CopyNodesToNewAnchorLocation).o1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'nodes';
      } else {
        tmp = protoOf(Operation).o1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(CopyNodesToNewAnchorLocation).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndex = _this__u8e3s4.c1q(tmp$ret$0).z1r_1;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var nodesToInsert = _this__u8e3s4.c1q(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.snapshots.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nodesToInsert.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nodesToInsert.o(index);
        // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.execute.<anonymous>' call
        if (!isInterface(applier, Applier))
          THROW_CCE();
        applier.xv(effectiveNodeIndex + index | 0, item);
        applier.wv(effectiveNodeIndex + index | 0, item);
      }
       while (inductionVariable <= last);
  };
  var CopyNodesToNewAnchorLocation_instance;
  function CopyNodesToNewAnchorLocation_getInstance() {
    if (CopyNodesToNewAnchorLocation_instance == null)
      new CopyNodesToNewAnchorLocation();
    return CopyNodesToNewAnchorLocation_instance;
  }
  function CopySlotTableToAnchorLocation() {
    CopySlotTableToAnchorLocation_instance = this;
    Operation.call(this, VOID, 4);
  }
  protoOf(CopySlotTableToAnchorLocation).o1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'resolvedState';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'resolvedCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'from';
        } else {
          // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
          if (parameter === _ObjectParameter___init__impl__iyg1ip(3)) {
            tmp = 'to';
          } else {
            tmp = protoOf(Operation).o1o.call(this, parameter);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(CopySlotTableToAnchorLocation).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(2);
    var from = _this__u8e3s4.c1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(3);
    var to = _this__u8e3s4.c1q(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    var parentCompositionContext = _this__u8e3s4.c1q(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp0_elvis_lhs = _this__u8e3s4.c1q(tmp$ret$3);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? parentCompositionContext.e16(from) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      composeRuntimeError('Could not resolve state for movable content');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var resolvedState = tmp;
    var anchors = slots.c1m(1, resolvedState.f16_1, 2);
    var tmp_0 = Companion_instance_2;
    var tmp_1 = to.x15_1;
    tmp_0.o1f(slots, anchors, isInterface(tmp_1, RecomposeScopeOwner) ? tmp_1 : THROW_CCE());
  };
  var CopySlotTableToAnchorLocation_instance;
  function CopySlotTableToAnchorLocation_getInstance() {
    if (CopySlotTableToAnchorLocation_instance == null)
      new CopySlotTableToAnchorLocation();
    return CopySlotTableToAnchorLocation_instance;
  }
  function EndMovableContentPlacement() {
    EndMovableContentPlacement_instance = this;
    Operation.call(this);
  }
  protoOf(EndMovableContentPlacement).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    positionToParentOf(slots, isInterface(applier, Applier) ? applier : THROW_CCE(), 0);
    slots.z14();
  };
  var EndMovableContentPlacement_instance;
  function EndMovableContentPlacement_getInstance() {
    if (EndMovableContentPlacement_instance == null)
      new EndMovableContentPlacement();
    return EndMovableContentPlacement_instance;
  }
  function ReleaseMovableGroupAtCurrent() {
    ReleaseMovableGroupAtCurrent_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(ReleaseMovableGroupAtCurrent).o1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'composition';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'parentCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'reference';
        } else {
          tmp = protoOf(Operation).o1o.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(ReleaseMovableGroupAtCurrent).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.c1q(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.c1q(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    releaseMovableGroupAtCurrent(tmp, tmp_0, _this__u8e3s4.c1q(tmp$ret$2), slots);
  };
  var ReleaseMovableGroupAtCurrent_instance;
  function ReleaseMovableGroupAtCurrent_getInstance() {
    if (ReleaseMovableGroupAtCurrent_instance == null)
      new ReleaseMovableGroupAtCurrent();
    return ReleaseMovableGroupAtCurrent_instance;
  }
  function ApplyChangeList() {
    ApplyChangeList_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(ApplyChangeList).o1o = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'changes';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'effectiveNodeIndex';
      } else {
        tmp = protoOf(Operation).o1o.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(ApplyChangeList).x1p = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp0_safe_receiver = _this__u8e3s4.c1q(tmp$ret$0);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z1r_1;
    var effectiveNodeIndex = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.c1q(tmp$ret$1);
    var tmp_0;
    if (effectiveNodeIndex > 0) {
      tmp_0 = new OffsetApplier(applier, effectiveNodeIndex);
    } else {
      tmp_0 = applier;
    }
    tmp.t1c(tmp_0, slots, rememberManager);
  };
  var ApplyChangeList_instance;
  function ApplyChangeList_getInstance() {
    if (ApplyChangeList_instance == null)
      new ApplyChangeList();
    return ApplyChangeList_instance;
  }
  function Operation(ints, objects) {
    ints = ints === VOID ? 0 : ints;
    objects = objects === VOID ? 0 : objects;
    this.l1o_1 = ints;
    this.m1o_1 = objects;
  }
  protoOf(Operation).z1p = function () {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = getKClassFromExpression(this).z8();
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(Operation).n1o = function (parameter) {
    return 'IntParameter(' + _IntParameter___get_offset__impl__xsdcin(parameter) + ')';
  };
  protoOf(Operation).o1o = function (parameter) {
    return 'ObjectParameter(' + _ObjectParameter___get_offset__impl__x7fx93(parameter) + ')';
  };
  protoOf(Operation).toString = function () {
    return this.z1p();
  };
  function positionToInsert(slots, anchor, applier) {
    var destination = slots.c16(anchor);
    runtimeCheck(slots.b12_1 < destination);
    positionToParentOf(slots, applier, destination);
    var nodeIndex = currentNodeIndex(slots);
    while (slots.b12_1 < destination) {
      if (slots.f1l(destination)) {
        if (slots.p19()) {
          applier.uv(slots.c17(slots.b12_1));
          nodeIndex = 0;
        }
        slots.b13();
      } else
        nodeIndex = nodeIndex + slots.j12() | 0;
    }
    runtimeCheck(slots.b12_1 === destination);
    return nodeIndex;
  }
  function positionToParentOf(slots, applier, index) {
    while (!slots.e1l(index)) {
      slots.u12();
      if (slots.h15(slots.d12_1)) {
        applier.vv();
      }
      slots.z14();
    }
  }
  function releaseMovableGroupAtCurrent(composition, parentContext, reference, slots) {
    var slotTable = new SlotTable();
    if (slots.c1l()) {
      slotTable.v12();
    }
    if (slots.d1l()) {
      slotTable.w12();
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.t12();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.changelist.releaseMovableGroupAtCurrent.<anonymous>' call
      writer.u13();
      writer.f13(126665345, reference.v15_1);
      writer.r15();
      writer.l19(reference.w15_1);
      var anchors = slots.a1m(reference.z15_1, 1, writer);
      writer.j12();
      writer.z14();
      writer.a15();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = anchors;
    }finally {
      writer.y12(normalClose);
    }
    var anchors_0 = tmp;
    var state = new MovableContentState(slotTable);
    if (Companion_instance_2.r1f(slotTable, anchors_0)) {
      var movableContentRecomposeScopeOwner = new releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1(composition, reference);
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var writer_0 = slotTable.t12();
      var normalClose_0 = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        Companion_instance_2.o1f(writer_0, anchors_0, movableContentRecomposeScopeOwner);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
        normalClose_0 = true;
        tmp_0 = Unit_instance;
      }finally {
        writer_0.y12(normalClose_0);
      }
    }
    parentContext.w1e(reference, state);
  }
  function currentNodeIndex(slots) {
    var original = slots.b12_1;
    var current = slots.d12_1;
    while (current >= 0 && !slots.h15(current)) {
      current = slots.m12(current);
    }
    var index = 0;
    current = current + 1 | 0;
    while (current < original) {
      if (slots.g1l(original, current)) {
        if (slots.h15(current))
          index = 0;
        current = current + 1 | 0;
      } else {
        index = index + (slots.h15(current) ? 1 : slots.i15(current)) | 0;
        current = current + slots.l14(current) | 0;
      }
    }
    return index;
  }
  function releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1($composition, $reference) {
    this.k1s_1 = $composition;
    this.l1s_1 = $reference;
  }
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).p1e = function (scope, instance) {
    var tmp = this.k1s_1;
    var tmp0_safe_receiver = isInterface(tmp, RecomposeScopeOwner) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p1e(scope, instance);
    var result = tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
    if (result.equals(InvalidationResult_IGNORED_getInstance())) {
      var tmp2_this = this.l1s_1;
      tmp2_this.a16_1 = plus_1(tmp2_this.a16_1, to(scope, instance));
      return InvalidationResult_SCHEDULED_getInstance();
    }
    return result;
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).t1e = function (scope) {
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).w1d = function (value) {
  };
  function OperationsDebugStringFormattable() {
  }
  function _WriteScope___init__impl__4xwato(stack) {
    return stack;
  }
  function _get_stack__b8zp2v($this) {
    return $this;
  }
  function _WriteScope___get_operation__impl__krvgwa($this) {
    return peekOperation(_get_stack__b8zp2v($this));
  }
  function WriteScope__setInt_impl_yt2o8b($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _IntParameter___get_offset__impl__xsdcin(parameter);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.g1o_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt.<anonymous>.<anonymous>' call
      var tmp$ret$0 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).n1o(parameter);
      throwIllegalStateException(tmp$ret$0);
    }
    $this$with.g1o_1 = $this$with.g1o_1 | mask;
    $this$with.c1o_1[topIntIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function WriteScope__setObject_impl_rr41y9($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.h1o_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setObject.<anonymous>.<anonymous>' call
      var tmp$ret$0 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).o1o(parameter);
      throwIllegalStateException(tmp$ret$0);
    }
    $this$with.h1o_1 = $this$with.h1o_1 | mask;
    $this$with.e1o_1[topObjectIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function determineNewSize($this, currentSize, requiredSize) {
    var resizeAmount = coerceAtMost(currentSize, 1024);
    return coerceAtLeast(currentSize + resizeAmount | 0, requiredSize);
  }
  function ensureIntArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.c1o_1.length;
    if (requiredSize > currentSize) {
      $this.c1o_1 = copyOf($this.c1o_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function ensureObjectArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.e1o_1.length;
    if (requiredSize > currentSize) {
      $this.e1o_1 = copyOf_0($this.e1o_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function createExpectedArgMask($this, paramCount) {
    return paramCount === 0 ? 0 : -1 >>> (32 - paramCount | 0) | 0;
  }
  function peekOperation($this) {
    return ensureNotNull($this.a1o_1[$this.b1o_1 - 1 | 0]);
  }
  function topIntIndexOf($this, parameter) {
    return ($this.d1o_1 - peekOperation($this).l1o_1 | 0) + _IntParameter___get_offset__impl__xsdcin(parameter) | 0;
  }
  function topObjectIndexOf($this, parameter) {
    return ($this.f1o_1 - peekOperation($this).m1o_1 | 0) + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0;
  }
  function OpIterator($outer) {
    this.p1s_1 = $outer;
    this.m1s_1 = 0;
    this.n1s_1 = 0;
    this.o1s_1 = 0;
  }
  protoOf(OpIterator).h = function () {
    if (this.m1s_1 >= this.p1s_1.b1o_1)
      return false;
    var op = this.q1s();
    this.n1s_1 = this.n1s_1 + op.l1o_1 | 0;
    this.o1s_1 = this.o1s_1 + op.m1o_1 | 0;
    this.m1s_1 = this.m1s_1 + 1 | 0;
    return this.m1s_1 < this.p1s_1.b1o_1;
  };
  protoOf(OpIterator).q1s = function () {
    return ensureNotNull(this.p1s_1.a1o_1[this.m1s_1]);
  };
  protoOf(OpIterator).y1p = function (parameter) {
    return this.p1s_1.c1o_1[this.n1s_1 + _IntParameter___get_offset__impl__xsdcin(parameter) | 0];
  };
  protoOf(OpIterator).c1q = function (parameter) {
    var tmp = this.p1s_1.e1o_1[this.o1s_1 + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function Companion_5() {
    this.r1s_1 = 1024;
    this.s1s_1 = 16;
  }
  var Companion_instance_6;
  function Companion_getInstance_5() {
    return Companion_instance_6;
  }
  function Operations() {
    OperationsDebugStringFormattable.call(this);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.a1o_1 = fillArrayVal(Array(16), null);
    this.b1o_1 = 0;
    this.c1o_1 = new Int32Array(16);
    this.d1o_1 = 0;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.e1o_1 = fillArrayVal(Array(16), null);
    this.f1o_1 = 0;
    this.g1o_1 = 0;
    this.h1o_1 = 0;
  }
  protoOf(Operations).i = function () {
    return this.b1o_1;
  };
  protoOf(Operations).p = function () {
    return this.i() === 0;
  };
  protoOf(Operations).au = function () {
    return !(this.i() === 0);
  };
  protoOf(Operations).b1 = function () {
    this.b1o_1 = 0;
    this.d1o_1 = 0;
    fill_0(this.e1o_1, null, 0, this.f1o_1);
    this.f1o_1 = 0;
  };
  protoOf(Operations).k1o = function (operation) {
    this.g1o_1 = 0;
    this.h1o_1 = 0;
    if (this.b1o_1 === this.a1o_1.length) {
      var resizeAmount = coerceAtMost(this.b1o_1, 1024);
      this.a1o_1 = copyOf_0(this.a1o_1, this.b1o_1 + resizeAmount | 0);
    }
    ensureIntArgsSizeAtLeast(this, this.d1o_1 + operation.l1o_1 | 0);
    ensureObjectArgsSizeAtLeast(this, this.f1o_1 + operation.m1o_1 | 0);
    var tmp = this.a1o_1;
    var tmp1 = this.b1o_1;
    this.b1o_1 = tmp1 + 1 | 0;
    tmp[tmp1] = operation;
    this.d1o_1 = this.d1o_1 + operation.l1o_1 | 0;
    this.f1o_1 = this.f1o_1 + operation.m1o_1 | 0;
  };
  protoOf(Operations).u1o = function (operation) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(operation.l1o_1 === 0 && operation.m1o_1 === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var tmp$ret$0 = 'Cannot push ' + operation.toString() + ' without arguments because it expects ' + ('' + operation.l1o_1 + ' ints and ' + operation.m1o_1 + ' objects.');
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.k1o(operation);
  };
  protoOf(Operations).u1p = function (other) {
    if (this.p()) {
      throw NoSuchElementException_init_$Create$('Cannot pop(), because the stack is empty.');
    }
    var tmp = this.a1o_1;
    this.b1o_1 = this.b1o_1 - 1 | 0;
    var op = ensureNotNull(tmp[this.b1o_1]);
    this.a1o_1[this.b1o_1] = null;
    other.k1o(op);
    var thisObjIdx = this.f1o_1;
    var otherObjIdx = other.f1o_1;
    // Inline function 'kotlin.repeat' call
    var times = op.m1o_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherObjIdx = otherObjIdx - 1 | 0;
        thisObjIdx = thisObjIdx - 1 | 0;
        other.e1o_1[otherObjIdx] = this.e1o_1[thisObjIdx];
        this.e1o_1[thisObjIdx] = null;
      }
       while (inductionVariable < times);
    var thisIntIdx = this.d1o_1;
    var otherIntIdx = other.d1o_1;
    // Inline function 'kotlin.repeat' call
    var times_0 = op.l1o_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherIntIdx = otherIntIdx - 1 | 0;
        thisIntIdx = thisIntIdx - 1 | 0;
        other.c1o_1[otherIntIdx] = this.c1o_1[thisIntIdx];
        this.c1o_1[thisIntIdx] = 0;
      }
       while (inductionVariable_0 < times_0);
    this.f1o_1 = this.f1o_1 - op.m1o_1 | 0;
    this.d1o_1 = this.d1o_1 - op.l1o_1 | 0;
  };
  protoOf(Operations).i1o = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.drain' call
    // Inline function 'androidx.compose.runtime.changelist.Operations.forEach' call
    if (this.au()) {
      var iterator = new OpIterator(this);
      do {
        // Inline function 'androidx.compose.runtime.changelist.Operations.executeAndFlushAllPendingOperations.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        iterator.q1s().x1p(iterator, applier, slots, rememberManager);
      }
       while (iterator.h());
    }
    this.b1();
  };
  protoOf(Operations).toString = function () {
    return protoOf(OperationsDebugStringFormattable).toString.call(this);
  };
  function MutableVector(content, size) {
    this.w16_1 = content;
    this.x16_1 = null;
    this.y16_1 = size;
  }
  protoOf(MutableVector).z16 = function (element) {
    this.lq(this.y16_1 + 1 | 0);
    this.w16_1[this.y16_1] = element;
    this.y16_1 = this.y16_1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).b1 = function () {
    var content = this.w16_1;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var inductionVariable = this.y16_1 - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        content[i] = null;
      }
       while (0 <= inductionVariable);
    this.y16_1 = 0;
  };
  protoOf(MutableVector).db = function (element) {
    var inductionVariable = 0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var last = this.y16_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
        var index = i;
        var tmp = this.w16_1[index];
        var tmp$ret$1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (equals(tmp$ret$1, element))
          return true;
      }
       while (!(i === last));
    return false;
  };
  protoOf(MutableVector).lq = function (capacity) {
    var oldContent = this.w16_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.math.max' call
      var b = imul(oldContent.length, 2);
      var newSize = Math.max(capacity, b);
      this.w16_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).au = function () {
    return !(this.y16_1 === 0);
  };
  protoOf(MutableVector).e1 = function (index) {
    var content = this.w16_1;
    var tmp = content[index];
    var item = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    if (!(index === (this.y16_1 - 1 | 0))) {
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      var endIndex = this.y16_1;
      arrayCopy(content, content, index, startIndex, endIndex);
    }
    this.y16_1 = this.y16_1 - 1 | 0;
    content[this.y16_1] = null;
    return item;
  };
  protoOf(MutableVector).z1g = function (newSize) {
    this.y16_1 = newSize;
  };
  function wrapIntoSet(_this__u8e3s4) {
    return new ScatterSetWrapper(_this__u8e3s4);
  }
  function ScatterSetWrapper$iterator$slambda(this$0, resultContinuation) {
    this.b1t_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ScatterSetWrapper$iterator$slambda).s1t = function ($this$iterator, $completion) {
    var tmp = this.t1t($this$iterator, $completion);
    tmp.t7_1 = Unit_instance;
    tmp.u7_1 = null;
    return tmp.z7();
  };
  protoOf(ScatterSetWrapper$iterator$slambda).n8 = function (p1, $completion) {
    return this.s1t(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ScatterSetWrapper$iterator$slambda).z7 = function () {
    var suspendResult = this.t7_1;
    $sm: do
      try {
        var tmp = this.r7_1;
        switch (tmp) {
          case 0:
            this.s7_1 = 11;
            var tmp_0 = this;
            tmp_0.d1t_1 = this.b1t_1.q1c_1;
            this.e1t_1 = this.d1t_1.wt_1;
            this.r7_1 = 1;
            continue $sm;
          case 1:
            var tmp_1 = this;
            tmp_1.g1t_1 = this.d1t_1;
            this.h1t_1 = this.g1t_1.vt_1;
            this.i1t_1 = this.h1t_1.length - 2 | 0;
            this.j1t_1 = numberRangeToNumber(0, this.i1t_1).f();
            this.r7_1 = 2;
            continue $sm;
          case 2:
            if (!this.j1t_1.g()) {
              this.r7_1 = 9;
              continue $sm;
            }

            this.k1t_1 = this.j1t_1.h();
            this.l1t_1 = this.h1t_1[this.k1t_1];
            var this_0 = this.l1t_1;
            if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.m1t_1 = 8 - (~(this.k1t_1 - this.i1t_1 | 0) >>> 31 | 0) | 0;
              this.n1t_1 = until(0, this.m1t_1).f();
              this.r7_1 = 3;
              continue $sm;
            } else {
              this.r7_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.n1t_1.g()) {
              this.r7_1 = 6;
              continue $sm;
            }

            this.o1t_1 = this.n1t_1.h();
            if (this.l1t_1.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
              this.p1t_1 = (this.k1t_1 << 3) + this.o1t_1 | 0;
              var tmp_2 = this;
              tmp_2.q1t_1 = this.p1t_1;
              var tmp_3 = this;
              var tmp_4 = this.e1t_1[this.q1t_1];
              tmp_3.r1t_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
              this.r7_1 = 4;
              suspendResult = this.c1t_1.jb(this.r1t_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.r7_1 = 5;
              continue $sm;
            }

          case 4:
            this.r7_1 = 5;
            continue $sm;
          case 5:
            this.l1t_1 = this.l1t_1.e2(8);
            this.r7_1 = 3;
            continue $sm;
          case 6:
            if (!(this.m1t_1 === 8)) {
              this.f1t_1 = Unit_instance;
              this.r7_1 = 10;
              continue $sm;
            } else {
              this.r7_1 = 7;
              continue $sm;
            }

          case 7:
            this.r7_1 = 8;
            continue $sm;
          case 8:
            this.r7_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.r7_1 = 1;
              continue $sm;
            }

            this.r7_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.u7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s7_1 === 11) {
          throw e;
        } else {
          this.r7_1 = this.s7_1;
          this.u7_1 = e;
        }
      }
     while (true);
  };
  protoOf(ScatterSetWrapper$iterator$slambda).t1t = function ($this$iterator, completion) {
    var i = new ScatterSetWrapper$iterator$slambda(this.b1t_1, completion);
    i.c1t_1 = $this$iterator;
    return i;
  };
  function ScatterSetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new ScatterSetWrapper$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.s1t($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ScatterSetWrapper(set) {
    this.q1c_1 = set;
  }
  protoOf(ScatterSetWrapper).i = function () {
    return this.q1c_1.i();
  };
  protoOf(ScatterSetWrapper).p = function () {
    return this.q1c_1.p();
  };
  protoOf(ScatterSetWrapper).f = function () {
    return iterator(ScatterSetWrapper$iterator$slambda_0(this, null));
  };
  protoOf(ScatterSetWrapper).eb = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.p();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.f();
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        // Inline function 'androidx.compose.runtime.collection.ScatterSetWrapper.containsAll.<anonymous>' call
        if (!this.q1c_1.n(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(ScatterSetWrapper).z = function (elements) {
    return this.eb(elements);
  };
  protoOf(ScatterSetWrapper).db = function (element) {
    return this.q1c_1.n(element);
  };
  protoOf(ScatterSetWrapper).n = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.db((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function ScopeMap() {
    this.u16_1 = mutableScatterMapOf();
  }
  protoOf(ScopeMap).i = function () {
    return this.u16_1.i();
  };
  protoOf(ScopeMap).s1c = function (key, scope) {
    // Inline function 'androidx.collection.MutableScatterMap.compute' call
    var this_0 = this.u16_1;
    var index = this_0.ts(key);
    var inserting = index < 0;
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.add.<anonymous>' call
    var tmp;
    if (inserting) {
      tmp = null;
    } else {
      var tmp_0 = this_0.js_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    var value = tmp;
    var tmp_1;
    if (value == null) {
      tmp_1 = scope;
    } else {
      if (value instanceof MutableScatterSet) {
        (value instanceof MutableScatterSet ? value : THROW_CCE()).d(scope);
        tmp_1 = value;
      } else {
        var tmp_2;
        if (!(value === scope)) {
          var set = new MutableScatterSet();
          set.d(!(value == null) ? value : THROW_CCE());
          set.d(scope);
          tmp_2 = set;
        } else {
          tmp_2 = value;
        }
        tmp_1 = tmp_2;
      }
    }
    var computedValue = tmp_1;
    if (inserting) {
      var insertionIndex = ~index;
      this_0.is_1[insertionIndex] = key;
      this_0.js_1[insertionIndex] = computedValue;
    } else {
      this_0.js_1[index] = computedValue;
    }
  };
  protoOf(ScopeMap).z1c = function (key, value) {
    this.u16_1.ss(key, value);
  };
  protoOf(ScopeMap).r1c = function (element) {
    return this.u16_1.j1(element);
  };
  protoOf(ScopeMap).o1c = function (key, scope) {
    var tmp0_elvis_lhs = this.u16_1.l1(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp_0;
    if (value instanceof MutableScatterSet) {
      var set = value instanceof MutableScatterSet ? value : THROW_CCE();
      var removed = set.a1(scope);
      if (removed && set.p()) {
        this.u16_1.u3(key);
      }
      return removed;
    } else {
      if (equals(value, scope)) {
        this.u16_1.u3(key);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
    }
    return tmp_0;
  };
  protoOf(ScopeMap).b1e = function (scope) {
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = this.u16_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.hs_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScope.<anonymous>' call
                  var tmp = this_0.is_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.js_1[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    set.a1(scope);
                    tmp_1 = set.p();
                  } else {
                    tmp_1 = value === scope;
                  }
                  if (tmp_1) {
                    this_0.ar(index);
                  }
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
  };
  protoOf(ScopeMap).o1d = function () {
    // Inline function 'kotlin.collections.hashMapOf' call
    var result = HashMap_init_$Create$_0();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_0 = this.u16_1;
    var k = this_0.is_1;
    var v = this_0.js_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.hs_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.g2(this_1.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.asMap.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  // Inline function 'kotlin.collections.set' call
                  var key_0 = !(key == null) ? key : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    tmp_1 = set.cu();
                  } else {
                    tmp_1 = mutableSetOf([!(value == null) ? value : THROW_CCE()]);
                  }
                  var value_0 = tmp_1;
                  result.t3(key_0, value_0);
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return result;
  };
  function persistentSetOf() {
    return Companion_getInstance_8().v1t();
  }
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    this.w1t_1 = new PersistentHashMap(Companion_getInstance_7().x1t_1, 0);
  }
  protoOf(Companion_6).y1t = function () {
    var tmp = this.w1t_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance_7;
  function Companion_getInstance_6() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_6();
    AbstractMap.call(this);
    this.b1u_1 = node;
    this.c1u_1 = size;
  }
  protoOf(PersistentHashMap).i = function () {
    return this.c1u_1;
  };
  protoOf(PersistentHashMap).m1 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).n1 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).j1 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.b1u_1.h1u(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).l1 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.b1u_1.i1u(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).t3 = function (key, value) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.b1u_1.j1u(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.k1u_1, this.i() + newNodeResult.l1u_1 | 0);
  };
  protoOf(PersistentHashMap).u3 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.b1u_1.m1u(tmp$ret$0, key, 0);
    if (this.b1u_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_6().y1t();
    }
    return new PersistentHashMap(newNode, this.i() - 1 | 0);
  };
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeEntriesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.n1u_1[pathIndex].t1u()) {
      return pathIndex;
    }
    if ($this.n1u_1[pathIndex].x1u()) {
      var node = $this.n1u_1[pathIndex].u1u();
      if (pathIndex === 6) {
        $this.n1u_1[pathIndex + 1 | 0].w1u(node.g1u_1, node.g1u_1.length);
      } else {
        $this.n1u_1[pathIndex + 1 | 0].w1u(node.g1u_1, imul(2, node.v1u()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.n1u_1[$this.o1u_1].t1u()) {
      return Unit_instance;
    }
    var inductionVariable = $this.o1u_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 && $this.n1u_1[i].x1u()) {
          $this.n1u_1[i].y1u();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.o1u_1 = result;
          return Unit_instance;
        }
        if (i > 0) {
          $this.n1u_1[i - 1 | 0].y1u();
        }
        $this.n1u_1[i].w1u(Companion_getInstance_7().x1t_1.g1u_1, 0);
      }
       while (0 <= inductionVariable);
    $this.p1u_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.g())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.n1u_1 = path;
    this.o1u_1 = 0;
    this.p1u_1 = true;
    this.n1u_1[0].w1u(node.g1u_1, imul(2, node.v1u()));
    this.o1u_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).g = function () {
    return this.p1u_1;
  };
  protoOf(PersistentHashMapBaseIterator).h = function () {
    checkHasNext(this);
    var result = this.n1u_1[this.o1u_1].h();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.q1u_1 = Companion_getInstance_7().x1t_1.g1u_1;
    this.r1u_1 = 0;
    this.s1u_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).z1u = function (buffer, dataSize, index) {
    this.q1u_1 = buffer;
    this.r1u_1 = dataSize;
    this.s1u_1 = index;
  };
  protoOf(TrieNodeBaseIterator).w1u = function (buffer, dataSize) {
    this.z1u(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).t1u = function () {
    return this.s1u_1 < this.r1u_1;
  };
  protoOf(TrieNodeBaseIterator).x1u = function () {
    assert(this.s1u_1 >= this.r1u_1);
    return this.s1u_1 < this.q1u_1.length;
  };
  protoOf(TrieNodeBaseIterator).u1u = function () {
    assert(this.x1u());
    var tmp = this.q1u_1[this.s1u_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).y1u = function () {
    assert(this.x1u());
    this.s1u_1 = this.s1u_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).g = function () {
    return this.t1u();
  };
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).h = function () {
    assert(this.t1u());
    this.s1u_1 = this.s1u_1 + 2 | 0;
    var tmp = this.q1u_1[this.s1u_1 - 2 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).h = function () {
    assert(this.t1u());
    this.s1u_1 = this.s1u_1 + 2 | 0;
    var tmp = this.q1u_1[this.s1u_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.q1u_1[this.s1u_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MapEntry(key, value) {
    this.g1v_1 = key;
    this.h1v_1 = value;
  }
  protoOf(MapEntry).h1 = function () {
    return this.g1v_1;
  };
  protoOf(MapEntry).i1 = function () {
    return this.h1v_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.h1();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.i1();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp = (equals(tmp0_safe_receiver.h1(), this.h1()) && equals(tmp0_safe_receiver.i1(), this.i1()));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.h1()) + '=' + toString_0(this.i1());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.i1v_1 = map;
  }
  protoOf(PersistentHashMapKeys).i = function () {
    return this.i1v_1.i();
  };
  protoOf(PersistentHashMapKeys).j4 = function (element) {
    return this.i1v_1.j1(element);
  };
  protoOf(PersistentHashMapKeys).n = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.j4((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).f = function () {
    return new PersistentHashMapKeysIterator(this.i1v_1.b1u_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.j1v_1 = map;
  }
  protoOf(PersistentHashMapEntries).i = function () {
    return this.j1v_1.i();
  };
  protoOf(PersistentHashMapEntries).k1v = function (element) {
    var tmp = !(element == null) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.j1v_1.l1(element.h1());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp_0 = equals(tmp0_safe_receiver, element.i1());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.i1() == null && this.j1v_1.j1(element.h1()) : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).n = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.k1v((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).f = function () {
    return new PersistentHashMapEntriesIterator(this.j1v_1.b1u_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.k1u_1 = node;
    this.l1u_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.e1u_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.g1u_1[keyIndex];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.g1u_1[keyIndex + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.l1v(positionMask);
    var newBuffer = insertEntryAtIndex($this.g1u_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.d1u_1 | positionMask, $this.e1u_1, newBuffer);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.g1u_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.d1u_1, $this.e1u_1, newBuffer);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.g1u_1;
    if (newNodeBuffer.length === 2 && newNode.e1u_1 === 0) {
      if ($this.g1u_1.length === 1) {
        newNode.d1u_1 = $this.e1u_1;
        return newNode;
      }
      var keyIndex = $this.l1v(positionMask);
      var newBuffer = replaceNodeWithEntry($this.g1u_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.d1u_1 ^ positionMask, $this.e1u_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.g1u_1, $this.g1u_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.d1u_1, $this.e1u_1, newBuffer_0);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.g1u_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.g1u_1, nodeIndex);
    return TrieNode_init_$Create$($this.d1u_1, $this.e1u_1 ^ positionMask, newBuffer);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.m1v(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.g1u_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.d1u_1 ^ positionMask, $this.e1u_1 | positionMask, newBuffer);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [key1, value1, key2, value2];
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment(keyHash1, shift);
    var setBit2 = indexSegment(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key1, value1, key2, value2];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key2, value2, key1, value1];
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [node];
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.g1u_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.g1u_1, keyIndex);
    return TrieNode_init_$Create$($this.d1u_1 ^ positionMask, $this.e1u_1, newBuffer);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.g1u_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.g1u_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.g1u_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.g1u_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.g1u_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.g1u_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.g1u_1.slice();
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.g1u_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.g1u_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function Companion_7() {
    Companion_instance_8 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.x1t_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_8;
  function Companion_getInstance_7() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_7();
    this.d1u_1 = dataMap;
    this.e1u_1 = nodeMap;
    this.f1u_1 = ownedBy;
    this.g1u_1 = buffer;
  }
  protoOf(TrieNode).v1u = function () {
    return countOneBits(this.d1u_1);
  };
  protoOf(TrieNode).n1v = function (positionMask) {
    return !((this.d1u_1 & positionMask) === 0);
  };
  protoOf(TrieNode).l1v = function (positionMask) {
    return imul(2, countOneBits(this.d1u_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).m1v = function (positionMask) {
    return (this.g1u_1.length - 1 | 0) - countOneBits(this.e1u_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).o1v = function (nodeIndex) {
    var tmp = this.g1u_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).h1u = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.n1v(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.l1v(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.o1v(this.m1v(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.h1u(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).i1u = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.n1v(keyPositionMask)) {
      var keyIndex = this.l1v(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.o1v(this.m1v(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.i1u(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).j1u = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.n1v(keyPositionMask)) {
      var keyIndex = this.l1v(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.m1v(keyPositionMask);
      var targetNode = this.o1v(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.j1u(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var node = putResult.k1u_1;
      tmp_2.k1u_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, node);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).m1u = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.n1v(keyPositionMask)) {
      var keyIndex = this.l1v(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.m1v(keyPositionMask);
      var targetNode = this.o1v(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.m1u(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length + 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, keyIndex, endIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = nodeIndex + 2 | 0;
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, destinationOffset, startIndex, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset_0 = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, destinationOffset_0, keyIndex, nodeIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, startIndex, endIndex);
    return newBuffer;
  }
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, nodeIndex);
    newBuffer[newNodeIndex] = newNode;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = newNodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, nodeIndex, endIndex);
    return newBuffer;
  }
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, endIndex);
    return newBuffer;
  }
  function Companion_8() {
    Companion_instance_9 = this;
    this.u1t_1 = new PersistentOrderedSet(EndOfChain_instance, EndOfChain_instance, Companion_getInstance_6().y1t());
  }
  protoOf(Companion_8).v1t = function () {
    return this.u1t_1;
  };
  var Companion_instance_9;
  function Companion_getInstance_8() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_8();
    AbstractSet.call(this);
    this.p1v_1 = firstElement;
    this.q1v_1 = lastElement;
    this.r1v_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).i = function () {
    return this.r1v_1.i();
  };
  protoOf(PersistentOrderedSet).n = function (element) {
    return this.r1v_1.j1(element);
  };
  protoOf(PersistentOrderedSet).d = function (element) {
    if (this.r1v_1.j1(element)) {
      return this;
    }
    if (this.p()) {
      var newMap = this.r1v_1.t3(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.q1v_1;
    var lastElement = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.r1v_1.l1(lastElement));
    var newMap_0 = this.r1v_1.t3(lastElement, lastLinks.u1v(element)).t3(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.p1v_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).a1 = function (element) {
    var tmp0_elvis_lhs = this.r1v_1.l1(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.r1v_1.u3(element);
    if (links.v1v()) {
      // Inline function 'kotlin.collections.get' call
      var this_0 = newMap;
      var key = links.s1v_1;
      var tmp$ret$0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).l1(key);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.s1v_1;
      newMap = tmp_0.t3((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE(), previousLinks.u1v(links.t1v_1));
    }
    if (links.x1v()) {
      // Inline function 'kotlin.collections.get' call
      var this_1 = newMap;
      var key_0 = links.t1v_1;
      var tmp$ret$1 = (isInterface(this_1, KtMap) ? this_1 : THROW_CCE()).l1(key_0);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.t1v_1;
      newMap = tmp_2.t3((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE(), nextLinks.w1v(links.s1v_1));
    }
    var newFirstElement = !links.v1v() ? links.t1v_1 : this.p1v_1;
    var newLastElement = !links.x1v() ? links.s1v_1 : this.q1v_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).f = function () {
    return new PersistentOrderedSetIterator(this.p1v_1, this.r1v_1);
  };
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_instance, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(objectCreate(protoOf(Links)));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, objectCreate(protoOf(Links)));
  }
  function Links(previous, next) {
    this.s1v_1 = previous;
    this.t1v_1 = next;
  }
  protoOf(Links).u1v = function (newNext) {
    return new Links(this.s1v_1, newNext);
  };
  protoOf(Links).w1v = function (newPrevious) {
    return new Links(newPrevious, this.t1v_1);
  };
  protoOf(Links).x1v = function () {
    return !(this.t1v_1 === EndOfChain_instance);
  };
  protoOf(Links).v1v = function () {
    return !(this.s1v_1 === EndOfChain_instance);
  };
  function checkHasNext_0($this) {
    if (!$this.g())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.y1v_1 = nextElement;
    this.z1v_1 = map;
    this.a1w_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).g = function () {
    return this.a1w_1 < this.z1v_1.i();
  };
  protoOf(PersistentOrderedSetIterator).h = function () {
    checkHasNext_0(this);
    var tmp = this.y1v_1;
    var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.a1w_1 = this.a1w_1 + 1 | 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.getOrElse' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp0_elvis_lhs = this.z1v_1.l1(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + toString_0(result) + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.y1v_1 = tmp_1.t1v_1;
    return result;
  };
  function EndOfChain() {
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    return EndOfChain_instance;
  }
  function assert(condition) {
  }
  function get_lambdaKey() {
    _init_properties_ComposableLambda_kt__wilkc();
    return lambdaKey;
  }
  var lambdaKey;
  function composableLambdaInstance(key, tracked, block) {
    _init_properties_ComposableLambda_kt__wilkc();
    return new ComposableLambdaImpl(key, tracked, block);
  }
  function replacableWith(_this__u8e3s4, other) {
    _init_properties_ComposableLambda_kt__wilkc();
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = !_this__u8e3s4.q1a() || equals(_this__u8e3s4, other) || equals(_this__u8e3s4.fx_1, other.fx_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function rememberComposableLambda(key, tracked, block, $composer, $changed) {
    _init_properties_ComposableLambda_kt__wilkc();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1573003438, 'C(rememberComposableLambda)P(1,2)*628@13280L54:ComposableLambda.kt#9drcc');
    if (isTraceInProgress()) {
      traceEventStart(-1573003438, $changed, -1, 'androidx.compose.runtime.internal.rememberComposableLambda (ComposableLambda.kt:628)');
    }
    // Inline function 'kotlin.also' call
    sourceInformationMarkerStart($composer_0, 1920923313, 'CC(remember):ComposableLambda.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.j1a();
    var tmp;
    if (false || it === Companion_getInstance().d13_1) {
      // Inline function 'androidx.compose.runtime.internal.rememberComposableLambda.<anonymous>' call
      var value = new ComposableLambdaImpl(key, tracked, block);
      $composer_0.k1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.internal.rememberComposableLambda.<anonymous>' call
    tmp1_group.g1w(block);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function composableLambda(composer, key, tracked, block) {
    _init_properties_ComposableLambda_kt__wilkc();
    // Inline function 'androidx.compose.runtime.rol' call
    var tmp$ret$0 = rotateLeft(key, 1);
    composer.q15(tmp$ret$0, get_lambdaKey());
    var slot = composer.j1a();
    var tmp;
    if (slot === Companion_getInstance().d13_1) {
      var value = new ComposableLambdaImpl(key, tracked, block);
      composer.k1a(value);
      tmp = value;
    } else {
      if (!(slot instanceof ComposableLambdaImpl))
        THROW_CCE();
      slot.g1w(block);
      tmp = slot;
    }
    var result = tmp;
    composer.t15();
    return result;
  }
  var properties_initialized_ComposableLambda_kt_u87f2i;
  function _init_properties_ComposableLambda_kt__wilkc() {
    if (!properties_initialized_ComposableLambda_kt_u87f2i) {
      properties_initialized_ComposableLambda_kt_u87f2i = true;
      lambdaKey = new Object();
    }
  }
  function IntRef(element) {
    element = element === VOID ? 0 : element;
    this.z1r_1 = element;
  }
  protoOf(IntRef).toString = function () {
    return 'IntRef(element = ' + this.z1r_1 + ')@' + toString_1(hashCode(this), 16);
  };
  function Companion_9() {
    Companion_instance_10 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_7().x1t_1;
    tmp.h1w_1 = new PersistentCompositionLocalHashMap(tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE(), 0);
  }
  var Companion_instance_10;
  function Companion_getInstance_9() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function PersistentCompositionLocalHashMap(node, size) {
    Companion_getInstance_9();
    PersistentHashMap.call(this, node, size);
  }
  protoOf(PersistentCompositionLocalHashMap).n1 = function () {
    return protoOf(PersistentHashMap).n1.call(this);
  };
  function persistentCompositionLocalHashMapOf() {
    return Companion_getInstance_9().h1w_1;
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_jvm_kt__b3bhkj();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_0($this, key) {
    var high = $this.t1n_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.u1n_1[0].equals(key) ? 0 : $this.u1n_1[0].v(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.u1n_1[mid];
      var comparison = midVal.x1(key);
      if (comparison.v(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.v(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.t1n_1 = size;
    this.u1n_1 = keys;
    this.v1n_1 = values;
  }
  protoOf(ThreadMap).w1n = function (key) {
    var index = find_0(this, key);
    return index >= 0 ? this.v1n_1[index] : null;
  };
  protoOf(ThreadMap).x1n = function (key, value) {
    var index = find_0(this, key);
    if (index < 0)
      return false;
    this.v1n_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).y1n = function (key, value) {
    var size = this.t1n_1;
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var indexedObject = this.v1n_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.internal.ThreadMap.newWith.<anonymous>' call
      if (!(element == null)) {
        count = count + 1 | 0;
      }
    }
    var newSize = count + 1 | 0;
    var newKeys = longArray(newSize);
    // Inline function 'kotlin.arrayOfNulls' call
    var newValues = fillArrayVal(Array(newSize), null);
    if (newSize > 1) {
      var dest = 0;
      var source = 0;
      $l$loop: while (dest < newSize && source < size) {
        var oldKey = this.u1n_1[source];
        var oldValue = this.v1n_1[source];
        if (oldKey.v(key) > 0) {
          newKeys[dest] = key;
          newValues[dest] = value;
          dest = dest + 1 | 0;
          break $l$loop;
        }
        if (!(oldValue == null)) {
          newKeys[dest] = oldKey;
          newValues[dest] = oldValue;
          dest = dest + 1 | 0;
        }
        source = source + 1 | 0;
      }
      if (source === size) {
        newKeys[newSize - 1 | 0] = key;
        newValues[newSize - 1 | 0] = value;
      } else {
        while (dest < newSize) {
          var oldKey_0 = this.u1n_1[source];
          var oldValue_0 = this.v1n_1[source];
          if (!(oldValue_0 == null)) {
            newKeys[dest] = oldKey_0;
            newValues[dest] = oldValue_0;
            dest = dest + 1 | 0;
          }
          source = source + 1 | 0;
        }
      }
    } else {
      newKeys[0] = key;
      newValues[0] = value;
    }
    return new ThreadMap(newSize, newKeys, newValues);
  };
  var properties_initialized_ThreadMap_jvm_kt_y907p1;
  function _init_properties_ThreadMap_jvm_kt__b3bhkj() {
    if (!properties_initialized_ThreadMap_jvm_kt_y907p1) {
      properties_initialized_ThreadMap_jvm_kt_y907p1 = true;
      var tmp = longArray(0);
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      emptyThreadMap = new ThreadMap(0, tmp, tmp$ret$0);
    }
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastToSet(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var this_0 = HashSet_init_$Create$(_this__u8e3s4.i());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.o(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        this_0.d(item);
      }
       while (inductionVariable <= last);
    return this_0;
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.e(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.i() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.o(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.e(separator);
        }
        if (limit < 0 || count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 && count > limit) {
      buffer.e(truncated);
    }
    buffer.e(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.e(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.e(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.x6(element.oc_1);
        } else {
          _this__u8e3s4.e(toString_0(element));
        }
      }
    }
  }
  function get_emptyLambda() {
    _init_properties_Snapshot_kt__l6n1ng();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    _init_properties_Snapshot_kt__l6n1ng();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    _init_properties_Snapshot_kt__l6n1ng();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    _init_properties_Snapshot_kt__l6n1ng();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pinningTable;
  }
  var pinningTable;
  function get_extraStateObjects() {
    _init_properties_Snapshot_kt__l6n1ng();
    return extraStateObjects;
  }
  var extraStateObjects;
  function set_applyObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    applyObservers = _set____db54di;
  }
  function get_applyObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return applyObservers;
  }
  var applyObservers;
  function set_globalWriteObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    globalWriteObservers = _set____db54di;
  }
  function get_globalWriteObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    _init_properties_Snapshot_kt__l6n1ng();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function get_pendingApplyObserverCount() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pendingApplyObserverCount;
  }
  var pendingApplyObserverCount;
  function StateObject() {
  }
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.m1w_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).lh = function () {
    return this.m1w_1();
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).l2 = function () {
    return this.m1w_1;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ObserverHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.l2(), other.l2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).hashCode = function () {
    return hashCode(this.l2());
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.n1w_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).lh = function () {
    return this.n1w_1();
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).l2 = function () {
    return this.n1w_1;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ObserverHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.l2(), other.l2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).hashCode = function () {
    return hashCode(this.l2());
  };
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      set_applyObservers(minus(get_applyObservers(), $observer));
      return Unit_instance;
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      set_globalWriteObservers(minus(get_globalWriteObservers(), $observer));
      advanceGlobalSnapshot_0();
      return Unit_instance;
    };
  }
  function Companion_10() {
    this.x1g_1 = 1;
  }
  protoOf(Companion_10).rv = function () {
    return currentSnapshot();
  };
  protoOf(Companion_10).p1n = function () {
    return !(get_threadSnapshot().xi() == null);
  };
  protoOf(Companion_10).b1i = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o1w(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Cannot create a mutable snapshot of an read-only snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_10).d1k = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    set_applyObservers(plus_1(get_applyObservers(), observer));
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_10).p1w = function (observer) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    set_globalWriteObservers(plus_1(get_globalWriteObservers(), observer));
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_10).a1h = function () {
    return currentSnapshot().q1w();
  };
  protoOf(Companion_10).y1g = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().xi().r1w();
    var changes = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.au()) === true;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_11;
  function Companion_getInstance_10() {
    return Companion_instance_11;
  }
  function Snapshot(id, invalid) {
    this.p16_1 = invalid;
    this.q16_1 = id;
    this.r16_1 = false;
    this.s16_1 = !(id === 0) ? trackPinning(id, this.s1w()) : -1;
  }
  protoOf(Snapshot).t1w = function (_set____db54di) {
    this.p16_1 = _set____db54di;
  };
  protoOf(Snapshot).s1w = function () {
    return this.p16_1;
  };
  protoOf(Snapshot).u1w = function (_set____db54di) {
    this.q16_1 = _set____db54di;
  };
  protoOf(Snapshot).t16 = function () {
    return this.q16_1;
  };
  protoOf(Snapshot).v1w = function (value) {
    // Inline function 'kotlin.error' call
    var message = 'Updating write count is not supported for this snapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(Snapshot).w1w = function () {
    return 0;
  };
  protoOf(Snapshot).lh = function () {
    this.r16_1 = true;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.y1w();
  };
  protoOf(Snapshot).c1i = function () {
    var previous = get_threadSnapshot().xi();
    get_threadSnapshot().d1f(this);
    return previous;
  };
  protoOf(Snapshot).d1i = function (snapshot) {
    get_threadSnapshot().d1f(snapshot);
  };
  protoOf(Snapshot).c1x = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.d1x();
    this.e1x();
  };
  protoOf(Snapshot).d1x = function () {
    set_openSnapshots(get_openSnapshots().j1x(this.t16()));
  };
  protoOf(Snapshot).e1x = function () {
    this.y1w();
  };
  protoOf(Snapshot).k1x = function () {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.r16_1) {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      var tmp$ret$0 = 'Cannot use a disposed snapshot';
      throwIllegalArgumentException(tmp$ret$0);
    }
  };
  protoOf(Snapshot).y1w = function () {
    if (this.s16_1 >= 0) {
      releasePinningLocked(this.s16_1);
      this.s16_1 = -1;
    }
  };
  protoOf(Snapshot).l1x = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.s16_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.s16_1 = -1;
    return this_0;
  };
  function ObserverHandle() {
  }
  function validateNotApplied($this) {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.q1i_1) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      var tmp$ret$0 = 'Unsupported operation on a snapshot that has been applied';
      throwIllegalStateException(tmp$ret$0);
    }
  }
  function validateNotAppliedOrPinned($this) {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    var tmp;
    if (!$this.q1i_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp = $this.s16_1 >= 0;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      var tmp$ret$1 = 'Unsupported operation on a disposed or applied snapshot';
      throwIllegalStateException(tmp$ret$1);
    }
  }
  function abandon($this) {
    var modified = $this.r1w();
    if (!(modified == null)) {
      validateNotApplied($this);
      $this.m1x(null);
      var id = $this.t16();
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = modified.wt_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = modified.vt_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_0 = slot;
            if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.abandon.<anonymous>' call
                    var tmp = k[index];
                    var current = ((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()).q1n();
                    while (!(current == null)) {
                      if (current.n1n_1 === id || contains($this.n1i_1, current.n1n_1)) {
                        current.n1n_1 = 0;
                      }
                      current = current.o1n_1;
                    }
                  }
                  slot = slot.e2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
    $this.c1x();
  }
  function releasePreviouslyPinnedSnapshotsLocked($this) {
    var inductionVariable = 0;
    var last = $this.o1i_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked($this.o1i_1[index]);
      }
       while (inductionVariable <= last);
  }
  function Companion_11() {
    Companion_instance_12 = this;
    this.n1x_1 = new Int32Array(0);
  }
  var Companion_instance_12;
  function Companion_getInstance_11() {
    if (Companion_instance_12 == null)
      new Companion_11();
    return Companion_instance_12;
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Companion_getInstance_11();
    Snapshot.call(this, id, invalid);
    this.i1i_1 = readObserver;
    this.j1i_1 = writeObserver;
    this.k1i_1 = 0;
    this.l1i_1 = null;
    this.m1i_1 = null;
    this.n1i_1 = Companion_getInstance_12().o1x_1;
    this.o1i_1 = Companion_getInstance_11().n1x_1;
    this.p1i_1 = 1;
    this.q1i_1 = false;
  }
  protoOf(MutableSnapshot).z1w = function () {
    return this.i1i_1;
  };
  protoOf(MutableSnapshot).a1x = function () {
    return this.j1i_1;
  };
  protoOf(MutableSnapshot).o1w = function (readObserver, writeObserver) {
    this.k1x();
    validateNotAppliedOrPinned(this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.p1x(this.t16());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().q1x(newId));
    var currentInvalid = this.s1w();
    this.t1w(currentInvalid.q1x(newId));
    var this_0 = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.t16() + 1 | 0, newId), mergedReadObserver(readObserver, this.z1w()), mergedWriteObserver(writeObserver, this.a1x()), this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.q1i_1 && !this.r16_1) {
      var previousId = this.t16();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.u1w(tmp0_0);
      set_openSnapshots(get_openSnapshots().q1x(this.t16()));
      this.t1w(addRange(this.s1w(), previousId + 1 | 0, this.t16()));
    }
    return this_0;
  };
  protoOf(MutableSnapshot).r1i = function () {
    var modified = this.r1w();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().xi(), this, get_openSnapshots().j1x(get_currentGlobalSnapshot().xi().t16())) : null;
    var observers = emptyList();
    var globalModified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null || modified.i() === 0) {
      this.d1x();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().xi();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var previousModified = previousGlobalSnapshot.r1w();
      if (!(previousModified == null) && previousModified.au()) {
        observers = get_applyObservers();
        globalModified = previousModified;
      }
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().xi();
      var result = this.r1x(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().j1x(previousGlobalSnapshot_0.t16()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.d1x();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var previousModified_0 = previousGlobalSnapshot_0.r1w();
      this.m1x(null);
      previousGlobalSnapshot_0.m1x(null);
      observers = get_applyObservers();
      globalModified = previousModified_0;
    }
    this.q1i_1 = true;
    if (!(globalModified == null)) {
      var nonNullGlobalModified = wrapIntoSet(ensureNotNull(globalModified));
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!nonNullGlobalModified.p()) {
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        var this_0 = observers;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
            item(nonNullGlobalModified, this);
          }
           while (inductionVariable <= last);
      }
    }
    if (!(modified == null) && modified.au()) {
      var modifiedSet = wrapIntoSet(modified);
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_1 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = this_1.i() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = this_1.o(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modifiedSet, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.e1x();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver = globalModified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = tmp0_safe_receiver.wt_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = tmp0_safe_receiver.vt_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex)
          do {
            var i = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_2 = slot;
            if (!this_2.g2(this_2.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount)
                do {
                  var j = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_1 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
                    var tmp = k[index_1];
                    var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    processForUnusedRecordsLocked(it);
                  }
                  slot = slot.e2(8);
                }
                 while (inductionVariable_2 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
    if (modified == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k_0 = modified.wt_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m_0 = modified.vt_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_3 = 0;
        if (inductionVariable_3 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.g2(this_3.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_4 = 0;
              if (inductionVariable_4 < bitCount_0)
                do {
                  var j_0 = inductionVariable_4;
                  inductionVariable_4 = inductionVariable_4 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_2 = (i_0 << 3) + j_0 | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
                    var tmp_0 = k_0[index_2];
                    var it_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    processForUnusedRecordsLocked(it_0);
                  }
                  slot_0 = slot_0.e2(8);
                }
                 while (inductionVariable_4 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
    var tmp2_safe_receiver = this.m1i_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_5 = 0;
      var last_1 = tmp2_safe_receiver.i() - 1 | 0;
      if (inductionVariable_5 <= last_1)
        do {
          var index_3 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var item_1 = tmp2_safe_receiver.o(index_3);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          processForUnusedRecordsLocked(item_1);
        }
         while (inductionVariable_5 <= last_1);
    }
    this.m1i_1 = null;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).x1w = function () {
    return false;
  };
  protoOf(MutableSnapshot).lh = function () {
    if (!this.r16_1) {
      protoOf(Snapshot).lh.call(this);
      this.s1x(this);
    }
  };
  protoOf(MutableSnapshot).t1x = function (snapshot) {
    this.p1i_1 = this.p1i_1 + 1 | 0;
  };
  protoOf(MutableSnapshot).s1x = function (snapshot) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.p1i_1 > 0)) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.nestedDeactivated.<anonymous>' call
      var tmp$ret$0 = 'no pending nested snapshots';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.p1i_1 = this.p1i_1 - 1 | 0;
    if (this.p1i_1 === 0) {
      if (!this.q1i_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).q1w = function () {
    if (this.q1i_1 || this.r16_1)
      return Unit_instance;
    this.u1x();
  };
  protoOf(MutableSnapshot).d1x = function () {
    set_openSnapshots(get_openSnapshots().j1x(this.t16()).v1x(this.n1i_1));
  };
  protoOf(MutableSnapshot).e1x = function () {
    releasePreviouslyPinnedSnapshotsLocked(this);
    protoOf(Snapshot).e1x.call(this);
  };
  protoOf(MutableSnapshot).r1x = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.s1w().q1x(this.t16()).w1x(this.n1i_1);
    var modified = ensureNotNull(this.r1w());
    var statesToRemove = null;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = modified.wt_1;
    $l$block_2: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = modified.vt_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  $l$block_1: {
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
                    var tmp = k[index];
                    var state = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var first = state.q1n();
                    var tmp0_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
                    var tmp_0;
                    if (tmp0_elvis_lhs == null) {
                      break $l$block_1;
                    } else {
                      tmp_0 = tmp0_elvis_lhs;
                    }
                    var current = tmp_0;
                    var tmp1_elvis_lhs = readable(first, this.t16(), start);
                    var tmp_1;
                    if (tmp1_elvis_lhs == null) {
                      break $l$block_1;
                    } else {
                      tmp_1 = tmp1_elvis_lhs;
                    }
                    var previous = tmp_1;
                    if (previous.n1n_1 === 1) {
                      break $l$block_1;
                    }
                    if (!equals(current, previous)) {
                      var tmp2_elvis_lhs = readable(first, this.t16(), this.s1w());
                      var tmp_2;
                      if (tmp2_elvis_lhs == null) {
                        readError();
                      } else {
                        tmp_2 = tmp2_elvis_lhs;
                      }
                      var applied = tmp_2;
                      var tmp4_elvis_lhs = optimisticMerges == null ? null : optimisticMerges.l1(current);
                      var tmp_3;
                      if (tmp4_elvis_lhs == null) {
                        // Inline function 'kotlin.run' call
                        // Inline function 'kotlin.contracts.contract' call
                        // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                        tmp_3 = state.s1n(previous, current, applied);
                      } else {
                        tmp_3 = tmp4_elvis_lhs;
                      }
                      var merged = tmp_3;
                      if (merged == null)
                        return new Failure(this);
                      else if (!equals(merged, applied))
                        if (equals(merged, current)) {
                          var tmp6_elvis_lhs = mergedRecords;
                          var tmp_4;
                          if (tmp6_elvis_lhs == null) {
                            // Inline function 'kotlin.also' call
                            // Inline function 'kotlin.collections.mutableListOf' call
                            var this_1 = ArrayList_init_$Create$();
                            // Inline function 'kotlin.contracts.contract' call
                            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                            mergedRecords = this_1;
                            tmp_4 = this_1;
                          } else {
                            tmp_4 = tmp6_elvis_lhs;
                          }
                          tmp_4.d(to(state, current.j1n()));
                          var tmp7_elvis_lhs = statesToRemove;
                          var tmp_5;
                          if (tmp7_elvis_lhs == null) {
                            // Inline function 'kotlin.also' call
                            // Inline function 'kotlin.collections.mutableListOf' call
                            var this_2 = ArrayList_init_$Create$();
                            // Inline function 'kotlin.contracts.contract' call
                            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                            statesToRemove = this_2;
                            tmp_5 = this_2;
                          } else {
                            tmp_5 = tmp7_elvis_lhs;
                          }
                          tmp_5.d(state);
                        } else {
                          var tmp8_elvis_lhs = mergedRecords;
                          var tmp_6;
                          if (tmp8_elvis_lhs == null) {
                            // Inline function 'kotlin.also' call
                            // Inline function 'kotlin.collections.mutableListOf' call
                            var this_3 = ArrayList_init_$Create$();
                            // Inline function 'kotlin.contracts.contract' call
                            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                            mergedRecords = this_3;
                            tmp_6 = this_3;
                          } else {
                            tmp_6 = tmp8_elvis_lhs;
                          }
                          tmp_6.d(!equals(merged, previous) ? to(state, merged) : to(state, previous.j1n()));
                        }
                    }
                  }
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_2;
            }
          }
        }
         while (!(i === lastIndex));
    }
    var tmp0_safe_receiver = mergedRecords;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.u1x();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last = tmp0_safe_receiver.i() - 1 | 0;
      if (inductionVariable_1 <= last)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item = tmp0_safe_receiver.o(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var state_0 = item.bd();
          var stateRecord = item.cd();
          stateRecord.n1n_1 = this.t16();
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          // Inline function 'androidx.compose.runtime.synchronized' call
          get_lock();
          stateRecord.o1n_1 = state_0.q1n();
          state_0.r1n(stateRecord);
        }
         while (inductionVariable_1 <= last);
    }
    var tmp1_safe_receiver = statesToRemove;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      var last_0 = tmp1_safe_receiver.i() - 1 | 0;
      if (inductionVariable_2 <= last_0)
        do {
          var index_1 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_0 = tmp1_safe_receiver.o(index_1);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          modified.a1(item_0);
        }
         while (inductionVariable_2 <= last_0);
      var mergedList = this.m1i_1;
      this.m1i_1 = mergedList == null ? tmp1_safe_receiver : plus_2(mergedList, tmp1_safe_receiver);
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).u1x = function () {
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.p1x(this.t16());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.q1i_1 && !this.r16_1) {
      var previousId = this.t16();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.u1w(tmp0);
      set_openSnapshots(get_openSnapshots().q1x(this.t16()));
      this.t1w(addRange(this.s1w(), previousId + 1 | 0, this.t16()));
    }
    return Unit_instance;
  };
  protoOf(MutableSnapshot).p1x = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.n1i_1 = this.n1i_1.q1x(id);
  };
  protoOf(MutableSnapshot).x1x = function (id) {
    if (id >= 0) {
      var tmp = this;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.collections.plus' call
      var this_0 = this.o1i_1;
      // Inline function 'kotlin.intArrayOf' call
      var elements = new Int32Array([id]);
      tmp.o1i_1 = primitiveArrayConcat([this_0, elements]);
    }
  };
  protoOf(MutableSnapshot).y1x = function (handles) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (handles.length === 0)
      return Unit_instance;
    var pinned = this.o1i_1;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pinned.length === 0) {
      tmp_0 = handles;
    } else {
      // Inline function 'kotlin.collections.plus' call
      tmp_0 = primitiveArrayConcat([pinned, handles]);
    }
    tmp.o1i_1 = tmp_0;
  };
  protoOf(MutableSnapshot).z1x = function (snapshots) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.n1i_1 = this.n1i_1.w1x(snapshots);
  };
  protoOf(MutableSnapshot).b1x = function (state) {
    var tmp0_elvis_lhs = this.r1w();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.m1x(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.d(state);
  };
  protoOf(MutableSnapshot).v1w = function (_set____db54di) {
    this.k1i_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).w1w = function () {
    return this.k1i_1;
  };
  protoOf(MutableSnapshot).m1x = function (_set____db54di) {
    this.l1i_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).r1w = function () {
    return this.l1i_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.a1y_1 = snapshot;
  }
  function SnapshotApplyResult() {
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($it) {
    return function (state) {
      var this_0 = $it;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.i() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.o(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      return new MutableSnapshot(tmp0, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
    var it = get_globalWriteObservers();
    var tmp0_elvis_lhs = singleOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = GlobalSnapshot$_init_$lambda_36kgl8(it);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp$ret$4 = tmp;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$4);
  }
  protoOf(GlobalSnapshot).o1w = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).q1w = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).o1y = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).s1x = function (snapshot) {
    return this.o1y(snapshot);
  };
  protoOf(GlobalSnapshot).p1y = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).t1x = function (snapshot) {
    return this.p1y(snapshot);
  };
  protoOf(GlobalSnapshot).r1i = function () {
    var message = 'Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(GlobalSnapshot).lh = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.y1w();
  };
  function StateRecord() {
    this.n1n_1 = currentSnapshot().t16();
    this.o1n_1 = null;
  }
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.q1y(id);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    return get_pinningTable().kq(pinned);
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().w1y(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().xi();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().xi() : tmp0_elvis_lhs;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    mergeReadObserver = mergeReadObserver === VOID ? true : mergeReadObserver;
    _init_properties_Snapshot_kt__l6n1ng();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if (!(readObserver == null) && !(parentObserver_0 == null) && !(readObserver === parentObserver_0)) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      tmp = readObserver == null ? parentObserver_0 : readObserver;
    }
    return tmp;
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    if (!(writeObserver == null) && !(parentObserver == null) && !(writeObserver === parentObserver)) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      tmp = writeObserver == null ? parentObserver : writeObserver;
    }
    return tmp;
  }
  function advanceGlobalSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var modified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().xi();
    modified = previousGlobalSnapshot.r1w();
    if (!(modified == null)) {
      get_pendingApplyObserverCount().kq(1);
    }
    var result = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    var tmp0_safe_receiver = modified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      try {
        var observers = get_applyObservers();
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = observers.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = observers.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
            item(wrapIntoSet(tmp0_safe_receiver), previousGlobalSnapshot);
          }
           while (inductionVariable <= last);
      }finally {
        get_pendingApplyObserverCount().kq(-1);
      }
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver_0 = modified;
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = tmp0_safe_receiver_0.wt_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = tmp0_safe_receiver_0.vt_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= lastIndex)
          do {
            var i = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_0 = slot;
            if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_1 = 0;
              if (inductionVariable_1 < bitCount)
                do {
                  var j = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
                    var tmp_1 = k[index_0];
                    var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                    processForUnusedRecordsLocked(it);
                  }
                  slot = slot.e2(8);
                }
                 while (inductionVariable_1 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp_0 = Unit_instance;
    }
    return result;
  }
  function advanceGlobalSnapshot_0() {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function deactivate($this) {
    if (!$this.l1z_1) {
      $this.l1z_1 = true;
      $this.k1z_1.s1x($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.k1z_1 = parent;
    this.l1z_1 = false;
    this.k1z_1.t1x(this);
  }
  protoOf(NestedMutableSnapshot).lh = function () {
    if (!this.r16_1) {
      protoOf(MutableSnapshot).lh.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).r1i = function () {
    if (this.k1z_1.q1i_1 || this.k1z_1.r16_1)
      return new Failure(this);
    var modified = this.r1w();
    var id = this.t16();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.k1z_1, this, this.k1z_1.s1w()) : null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null || modified.i() === 0) {
      this.c1x();
    } else {
      var result = this.r1x(this.k1z_1.t16(), optimisticMerges_0, this.k1z_1.s1w());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_safe_receiver = this.k1z_1.r1w();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.ov(modified);
        tmp = tmp0_safe_receiver;
      }
      if (tmp == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.k1z_1.m1x(modified);
        this.m1x(null);
      }
    }
    if (this.k1z_1.t16() < id) {
      this.k1z_1.u1x();
    }
    this.k1z_1.t1w(this.k1z_1.s1w().j1x(id).v1x(this.n1i_1));
    this.k1z_1.p1x(id);
    this.k1z_1.x1x(this.l1x());
    this.k1z_1.z1x(this.n1i_1);
    this.k1z_1.y1x(this.o1i_1);
    this.q1i_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  function addRange(_this__u8e3s4, from, until) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.q1x(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.r1w();
    var id = currentSnapshot.t16();
    if (modified == null)
      return null;
    var start = applyingSnapshot.s1w().q1x(applyingSnapshot.t16()).w1x(applyingSnapshot.n1i_1);
    var result = null;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = modified.wt_1;
    $l$block_1: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = modified.vt_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.g2(this_0.c2().d2(7)).g2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.g2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  $l$block_0: {
                    // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
                    var tmp = k[index];
                    var state = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var first = state.q1n();
                    var tmp0_elvis_lhs = readable(first, id, invalidSnapshots);
                    var tmp_0;
                    if (tmp0_elvis_lhs == null) {
                      break $l$block_0;
                    } else {
                      tmp_0 = tmp0_elvis_lhs;
                    }
                    var current = tmp_0;
                    var tmp1_elvis_lhs = readable(first, id, start);
                    var tmp_1;
                    if (tmp1_elvis_lhs == null) {
                      break $l$block_0;
                    } else {
                      tmp_1 = tmp1_elvis_lhs;
                    }
                    var previous = tmp_1;
                    if (!equals(current, previous)) {
                      var tmp2_elvis_lhs = readable(first, applyingSnapshot.t16(), applyingSnapshot.s1w());
                      var tmp_2;
                      if (tmp2_elvis_lhs == null) {
                        readError();
                      } else {
                        tmp_2 = tmp2_elvis_lhs;
                      }
                      var applied = tmp_2;
                      var merged = state.s1n(previous, current, applied);
                      if (!(merged == null)) {
                        // Inline function 'kotlin.collections.set' call
                        var tmp3_elvis_lhs = result;
                        var tmp_3;
                        if (tmp3_elvis_lhs == null) {
                          // Inline function 'kotlin.also' call
                          // Inline function 'kotlin.collections.hashMapOf' call
                          var this_1 = HashMap_init_$Create$_0();
                          // Inline function 'kotlin.contracts.contract' call
                          // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>.<anonymous>' call
                          result = this_1;
                          tmp_3 = this_1;
                        } else {
                          tmp_3 = tmp3_elvis_lhs;
                        }
                        tmp_3.t3(current, merged);
                      } else {
                        return null;
                      }
                    }
                  }
                }
                slot = slot.e2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_1;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var openSnapshots = get_openSnapshots();
    if (!openSnapshots.o(snapshot.t16())) {
      // Inline function 'kotlin.error' call
      var tmp = snapshot.t16();
      var tmp_0 = snapshot.r16_1;
      var tmp0_safe_receiver = snapshot instanceof MutableSnapshot ? snapshot : null;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q1i_1;
      var tmp_1 = toString(tmp1_elvis_lhs == null ? 'read-only' : tmp1_elvis_lhs);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.validateOpen.<anonymous>' call
      var message = 'Snapshot is not open: id=' + tmp + ', disposed=' + tmp_0 + ', applied=' + tmp_1 + ', lowestPin=' + get_pinningTable().m1z(-1);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().j1x(previousGlobalSnapshot.t16()));
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().j1x(previousGlobalSnapshot.t16()));
    get_currentGlobalSnapshot().m1e(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.lh();
    set_openSnapshots(get_openSnapshots().q1x(globalId));
    return result;
  }
  function checkAndOverwriteUnusedRecordsLocked() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotWeakSet.removeIf' call
    var this_0 = get_extraStateObjects();
    var size = this_0.n1z_1;
    var currentUsed = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var entry = this_0.p1z_1[i];
        var value = entry == null ? null : entry.xi();
        var tmp;
        if (!(value == null)) {
          // Inline function 'androidx.compose.runtime.snapshots.checkAndOverwriteUnusedRecordsLocked.<anonymous>' call
          tmp = !!overwriteUnusedRecordsLocked(value);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (!(currentUsed === i)) {
            this_0.p1z_1[currentUsed] = entry;
            this_0.o1z_1[currentUsed] = this_0.o1z_1[i];
          }
          currentUsed = currentUsed + 1 | 0;
        }
      }
       while (inductionVariable < size);
    var inductionVariable_0 = currentUsed;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.p1z_1[i_0] = null;
        this_0.o1z_1[i_0] = 0;
      }
       while (inductionVariable_0 < size);
    if (!(currentUsed === size)) {
      this_0.n1z_1 = currentUsed;
    }
  }
  function processForUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (overwriteUnusedRecordsLocked(state)) {
      get_extraStateObjects().r1z(state);
    }
  }
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.n1n_1 < current.n1n_1 ? current : candidate;
      }
      current = current.o1n_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var message = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.q1n();
    var overwriteRecord = null;
    var validRecord = null;
    var reuseLimit = get_pinningTable().m1z(get_nextSnapshotId());
    var retainedRecords = 0;
    while (!(current == null)) {
      var currentId = current.n1n_1;
      if (!(currentId === 0)) {
        if (currentId < reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
            retainedRecords = retainedRecords + 1 | 0;
          } else {
            var tmp;
            if (current.n1n_1 < validRecord.n1n_1) {
              tmp = current;
            } else {
              var result = validRecord;
              validRecord = current;
              tmp = result;
            }
            var recordToOverwrite = tmp;
            if (overwriteRecord == null) {
              var tmp$ret$1;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.findYoungestOr' call
                var this_0 = state.q1n();
                var current_0 = this_0;
                var youngest = this_0;
                while (!(current_0 == null)) {
                  // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
                  if (current_0.n1n_1 >= reuseLimit) {
                    tmp$ret$1 = current_0;
                    break $l$block;
                  }
                  if (youngest.n1n_1 < current_0.n1n_1)
                    youngest = current_0;
                  current_0 = current_0.o1n_1;
                }
                tmp$ret$1 = youngest;
              }
              overwriteRecord = tmp$ret$1;
            }
            recordToOverwrite.n1n_1 = 0;
            recordToOverwrite.i1n(overwriteRecord);
          }
        } else {
          retainedRecords = retainedRecords + 1 | 0;
        }
      }
      current = current.o1n_1;
    }
    return retainedRecords > 1;
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.n1n_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return !(candidateSnapshot === 0) && candidateSnapshot <= currentSnapshot && !invalid.o(candidateSnapshot);
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_instance_11.rv();
    var tmp0_safe_receiver = snapshot.z1w();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.t16(), snapshot.s1w());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_instance_11.rv();
      var tmp_0 = state.q1n();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.t16(), syncSnapshot.s1w());
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        readError();
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function current(r) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var snapshot = Companion_instance_11.rv();
    var tmp0_elvis_lhs = readable(r, snapshot.t16(), snapshot.s1w());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      var syncSnapshot = Companion_instance_11.rv();
      tmp = readable(r, syncSnapshot.t16(), syncSnapshot.s1w());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function notifyWrite(snapshot, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    snapshot.v1w(snapshot.w1w() + 1 | 0);
    var tmp1_safe_receiver = snapshot.a1x();
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.x1w()) {
      snapshot.b1x(state);
    }
    var id = snapshot.t16();
    if (candidate.n1n_1 === id)
      return candidate;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.n1n_1 = id;
    if (!(candidate.n1n_1 === 1)) {
      snapshot.b1x(state);
    }
    return newData;
  }
  function newOverwritableRecordLocked(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = usedLocked(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_safe_receiver.n1n_1 = 2147483647;
      tmp_0 = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = _this__u8e3s4.j1n();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      this_0.n1n_1 = 2147483647;
      this_0.o1n_1 = state.q1n();
      state.r1n(this_0 instanceof StateRecord ? this_0 : THROW_CCE());
      var tmp_2 = this_0;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.q1n();
    var validRecord = null;
    var reuseLimit = get_pinningTable().m1z(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_12().o1x_1;
    while (!(current == null)) {
      var currentId = current.n1n_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.n1n_1 < validRecord.n1n_1 ? current : validRecord;
        }
      }
      current = current.o1n_1;
    }
    return null;
  }
  function emptyLambda$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function advanceGlobalSnapshot$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      set_openSnapshots(get_openSnapshots().q1x(result.t16()));
      return result;
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function _init_properties_Snapshot_kt__l6n1ng() {
    if (!properties_initialized_Snapshot_kt_2vlcoq) {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = new Object();
      openSnapshots = Companion_getInstance_12().o1x_1;
      nextSnapshotId = 2;
      pinningTable = new SnapshotDoubleIndexHeap();
      extraStateObjects = new SnapshotWeakSet();
      applyObservers = emptyList();
      globalWriteObservers = emptyList();
      // Inline function 'kotlin.also' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      var this_0 = new GlobalSnapshot(tmp0, Companion_getInstance_12().o1x_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().q1x(this_0.t16()));
      currentGlobalSnapshot = new AtomicReference(this_0);
      snapshotInitializer = get_currentGlobalSnapshot().xi();
      pendingApplyObserverCount = new AtomicInt(0);
    }
  }
  function shiftUp($this, index) {
    var values = $this.s1y_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap_1($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.s1y_1;
    var half = $this.r1y_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.r1y_1 && values[right] < values[left]) {
        if (values[right] < values[current]) {
          swap_1($this, right, current);
          current = right;
        } else
          return Unit_instance;
      } else if (values[left] < values[current]) {
        swap_1($this, left, current);
        current = left;
      } else
        return Unit_instance;
    }
  }
  function swap_1($this, a, b) {
    var values = $this.s1y_1;
    var index = $this.t1y_1;
    var handles = $this.u1y_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.s1y_1.length;
    if (atLeast <= capacity)
      return Unit_instance;
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.s1y_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newValues, 0, 0, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.t1y_1;
    var endIndex_0 = this_1.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newIndex, 0, 0, endIndex_0);
    $this.s1y_1 = newValues;
    $this.t1y_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.u1y_1.length;
    if ($this.v1y_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = tmp_2 + 1 | 0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.u1y_1;
      var endIndex = this_0.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_3, newHandles, 0, 0, endIndex);
      $this.u1y_1 = newHandles;
    }
    var handle = $this.v1y_1;
    $this.v1y_1 = $this.u1y_1[$this.v1y_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.u1y_1[handle] = $this.v1y_1;
    $this.v1y_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.r1y_1 = 0;
    this.s1y_1 = new Int32Array(16);
    this.t1y_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(16);
    while (tmp_0 < 16) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2 + 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.u1y_1 = tmp_1;
    this.v1y_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).m1z = function (default_0) {
    return this.r1y_1 > 0 ? this.s1y_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).kq = function (value) {
    ensure(this, this.r1y_1 + 1 | 0);
    var tmp1 = this.r1y_1;
    this.r1y_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.s1y_1[i] = value;
    this.t1y_1[i] = handle;
    this.u1y_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).w1y = function (handle) {
    var i = this.u1y_1[handle];
    swap_1(this, i, this.r1y_1 - 1 | 0);
    this.r1y_1 = this.r1y_1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_12() {
    Companion_instance_13 = this;
    this.o1x_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_13;
  function Companion_getInstance_12() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.a20_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).j20 = function ($this$sequence, $completion) {
    var tmp = this.k20($this$sequence, $completion);
    tmp.t7_1 = Unit_instance;
    tmp.u7_1 = null;
    return tmp.z7();
  };
  protoOf(SnapshotIdSet$iterator$slambda).n8 = function (p1, $completion) {
    return this.j20(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).z7 = function () {
    var suspendResult = this.t7_1;
    $sm: do
      try {
        var tmp = this.r7_1;
        switch (tmp) {
          case 0:
            this.s7_1 = 15;
            this.c20_1 = this.a20_1.i1x_1;
            if (!(this.c20_1 == null)) {
              this.d20_1 = intArrayIterator(this.c20_1);
              this.r7_1 = 1;
              continue $sm;
            } else {
              this.r7_1 = 4;
              continue $sm;
            }

          case 1:
            if (!this.d20_1.g()) {
              this.r7_1 = 3;
              continue $sm;
            }

            this.e20_1 = this.d20_1.h();
            this.r7_1 = 2;
            suspendResult = this.b20_1.jb(this.e20_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.r7_1 = 1;
            continue $sm;
          case 3:
            this.r7_1 = 4;
            continue $sm;
          case 4:
            if (!this.a20_1.g1x_1.equals(new Long(0, 0))) {
              this.f20_1 = until(0, 64).f();
              this.r7_1 = 5;
              continue $sm;
            } else {
              this.r7_1 = 9;
              continue $sm;
            }

          case 5:
            if (!this.f20_1.g()) {
              this.r7_1 = 8;
              continue $sm;
            }

            this.g20_1 = this.f20_1.h();
            if (!this.a20_1.g1x_1.g2((new Long(1, 0)).d2(this.g20_1)).equals(new Long(0, 0))) {
              this.r7_1 = 6;
              suspendResult = this.b20_1.jb(this.g20_1 + this.a20_1.h1x_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.r7_1 = 7;
              continue $sm;
            }

          case 6:
            this.r7_1 = 7;
            continue $sm;
          case 7:
            this.r7_1 = 5;
            continue $sm;
          case 8:
            this.r7_1 = 9;
            continue $sm;
          case 9:
            if (!this.a20_1.f1x_1.equals(new Long(0, 0))) {
              this.h20_1 = until(0, 64).f();
              this.r7_1 = 10;
              continue $sm;
            } else {
              this.r7_1 = 14;
              continue $sm;
            }

          case 10:
            if (!this.h20_1.g()) {
              this.r7_1 = 13;
              continue $sm;
            }

            this.i20_1 = this.h20_1.h();
            if (!this.a20_1.f1x_1.g2((new Long(1, 0)).d2(this.i20_1)).equals(new Long(0, 0))) {
              this.r7_1 = 11;
              suspendResult = this.b20_1.jb((this.i20_1 + 64 | 0) + this.a20_1.h1x_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.r7_1 = 12;
              continue $sm;
            }

          case 11:
            this.r7_1 = 12;
            continue $sm;
          case 12:
            this.r7_1 = 10;
            continue $sm;
          case 13:
            this.r7_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            throw this.u7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s7_1 === 15) {
          throw e;
        } else {
          this.r7_1 = this.s7_1;
          this.u7_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).k20 = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.a20_1, completion);
    i.b20_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.j20($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_12();
    this.f1x_1 = upperSet;
    this.g1x_1 = lowerSet;
    this.h1x_1 = lowerBound;
    this.i1x_1 = belowBound;
  }
  protoOf(SnapshotIdSet).o = function (bit) {
    var offset = bit - this.h1x_1 | 0;
    if (offset >= 0 && offset < 64) {
      return !(new Long(1, 0)).d2(offset).g2(this.g1x_1).equals(new Long(0, 0));
    } else if (offset >= 64 && offset < 128) {
      return !(new Long(1, 0)).d2(offset - 64 | 0).g2(this.f1x_1).equals(new Long(0, 0));
    } else if (offset > 0) {
      return false;
    } else {
      var tmp0_safe_receiver = this.i1x_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
        tmp = binarySearch(tmp0_safe_receiver, bit) >= 0;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    }
  };
  protoOf(SnapshotIdSet).q1x = function (bit) {
    var offset = bit - this.h1x_1 | 0;
    if (offset >= 0 && offset < 64) {
      var mask = (new Long(1, 0)).d2(offset);
      if (this.g1x_1.g2(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.f1x_1, this.g1x_1.h2(mask), this.h1x_1, this.i1x_1);
      }
    } else if (offset >= 64 && offset < 128) {
      var mask_0 = (new Long(1, 0)).d2(offset - 64 | 0);
      if (this.f1x_1.g2(mask_0).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.f1x_1.h2(mask_0), this.g1x_1, this.h1x_1, this.i1x_1);
      }
    } else if (offset >= 128) {
      if (!this.o(bit)) {
        var newUpperSet = this.f1x_1;
        var newLowerSet = this.g1x_1;
        var newLowerBound = this.h1x_1;
        var newBelowBound = null;
        var targetLowerBound = imul((bit + 1 | 0) / 64 | 0, 64);
        $l$loop: while (newLowerBound < targetLowerBound) {
          if (!newLowerSet.equals(new Long(0, 0))) {
            if (newBelowBound == null) {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.collections.mutableListOf' call
              var this_0 = ArrayList_init_$Create$();
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
              var tmp0_safe_receiver = this.i1x_1;
              if (tmp0_safe_receiver == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'kotlin.collections.forEach' call
                var inductionVariable = 0;
                var last = tmp0_safe_receiver.length;
                while (inductionVariable < last) {
                  var element = tmp0_safe_receiver[inductionVariable];
                  inductionVariable = inductionVariable + 1 | 0;
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                  this_0.d(element);
                }
              }
              newBelowBound = this_0;
            }
            // Inline function 'kotlin.repeat' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < 64)
              do {
                var index = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                if (!newLowerSet.g2((new Long(1, 0)).d2(index)).equals(new Long(0, 0))) {
                  newBelowBound.d(index + newLowerBound | 0);
                }
              }
               while (inductionVariable_0 < 64);
          }
          if (newUpperSet.equals(new Long(0, 0))) {
            newLowerBound = targetLowerBound;
            newLowerSet = new Long(0, 0);
            break $l$loop;
          }
          newLowerSet = newUpperSet;
          newUpperSet = new Long(0, 0);
          newLowerBound = newLowerBound + 64 | 0;
        }
        var tmp = newUpperSet;
        var tmp_0 = newLowerSet;
        var tmp_1 = newLowerBound;
        var tmp0_safe_receiver_0 = newBelowBound;
        var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
        return (new SnapshotIdSet(tmp, tmp_0, tmp_1, tmp1_elvis_lhs == null ? this.i1x_1 : tmp1_elvis_lhs)).q1x(bit);
      }
    } else {
      var tmp2_elvis_lhs = this.i1x_1;
      var tmp_2;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.intArrayOf' call
        var tmp$ret$3 = new Int32Array([bit]);
        return new SnapshotIdSet(this.f1x_1, this.g1x_1, this.h1x_1, tmp$ret$3);
      } else {
        tmp_2 = tmp2_elvis_lhs;
      }
      var array = tmp_2;
      var location = binarySearch(array, bit);
      if (location < 0) {
        var insertLocation = -(location + 1 | 0) | 0;
        var newSize = array.length + 1 | 0;
        var newBelowBound_0 = new Int32Array(newSize);
        // Inline function 'kotlin.collections.copyInto' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = array;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_3, newBelowBound_0, 0, 0, insertLocation);
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = insertLocation + 1 | 0;
        var endIndex = newSize - 1 | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_4 = array;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_4, newBelowBound_0, destinationOffset, insertLocation, endIndex);
        newBelowBound_0[insertLocation] = bit;
        return new SnapshotIdSet(this.f1x_1, this.g1x_1, this.h1x_1, newBelowBound_0);
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).j1x = function (bit) {
    var offset = bit - this.h1x_1 | 0;
    if (offset >= 0 && offset < 64) {
      var mask = (new Long(1, 0)).d2(offset);
      if (!this.g1x_1.g2(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.f1x_1, this.g1x_1.g2(mask.c2()), this.h1x_1, this.i1x_1);
      }
    } else if (offset >= 64 && offset < 128) {
      var mask_0 = (new Long(1, 0)).d2(offset - 64 | 0);
      if (!this.f1x_1.g2(mask_0).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.f1x_1.g2(mask_0.c2()), this.g1x_1, this.h1x_1, this.i1x_1);
      }
    } else if (offset < 0) {
      var array = this.i1x_1;
      if (!(array == null)) {
        var location = binarySearch(array, bit);
        if (location >= 0) {
          var newSize = array.length - 1 | 0;
          if (newSize === 0) {
            return new SnapshotIdSet(this.f1x_1, this.g1x_1, this.h1x_1, null);
          }
          var newBelowBound = new Int32Array(newSize);
          if (location > 0) {
            // Inline function 'kotlin.collections.copyInto' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp, newBelowBound, 0, 0, location);
          }
          if (location < newSize) {
            // Inline function 'kotlin.collections.copyInto' call
            var startIndex = location + 1 | 0;
            var endIndex = newSize + 1 | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_0 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_0, newBelowBound, location, startIndex, endIndex);
          }
          return new SnapshotIdSet(this.f1x_1, this.g1x_1, this.h1x_1, newBelowBound);
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).v1x = function (bits) {
    if (bits === Companion_getInstance_12().o1x_1)
      return this;
    if (this === Companion_getInstance_12().o1x_1)
      return Companion_getInstance_12().o1x_1;
    var tmp;
    if (bits.h1x_1 === this.h1x_1 && bits.i1x_1 === this.i1x_1) {
      tmp = new SnapshotIdSet(this.f1x_1.g2(bits.f1x_1.c2()), this.g1x_1.g2(bits.g1x_1.c2()), this.h1x_1, this.i1x_1);
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
      var accumulator = this;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
      var belowBound = bits.i1x_1;
      if (!(belowBound == null)) {
        var inductionVariable = 0;
        var last = belowBound.length;
        while (inductionVariable < last) {
          var element = belowBound[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
          accumulator = accumulator.j1x(element);
        }
      }
      if (!bits.g1x_1.equals(new Long(0, 0))) {
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < 64)
          do {
            var index = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (!bits.g1x_1.g2((new Long(1, 0)).d2(index)).equals(new Long(0, 0))) {
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
              var element_0 = index + bits.h1x_1 | 0;
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
              accumulator = accumulator.j1x(element_0);
            }
          }
           while (inductionVariable_0 < 64);
      }
      if (!bits.f1x_1.equals(new Long(0, 0))) {
        var inductionVariable_1 = 0;
        if (inductionVariable_1 < 64)
          do {
            var index_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            if (!bits.f1x_1.g2((new Long(1, 0)).d2(index_0)).equals(new Long(0, 0))) {
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
              var element_1 = (index_0 + 64 | 0) + bits.h1x_1 | 0;
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
              accumulator = accumulator.j1x(element_1);
            }
          }
           while (inductionVariable_1 < 64);
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).w1x = function (bits) {
    if (bits === Companion_getInstance_12().o1x_1)
      return this;
    if (this === Companion_getInstance_12().o1x_1)
      return bits;
    var tmp;
    if (bits.h1x_1 === this.h1x_1 && bits.i1x_1 === this.i1x_1) {
      tmp = new SnapshotIdSet(this.f1x_1.h2(bits.f1x_1), this.g1x_1.h2(bits.g1x_1), this.h1x_1, this.i1x_1);
    } else {
      var tmp_0;
      if (this.i1x_1 == null) {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
        var accumulator = bits;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
        var belowBound = this.i1x_1;
        if (!(belowBound == null)) {
          var inductionVariable = 0;
          var last = belowBound.length;
          while (inductionVariable < last) {
            var element = belowBound[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
            accumulator = accumulator.q1x(element);
          }
        }
        if (!this.g1x_1.equals(new Long(0, 0))) {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < 64)
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (!this.g1x_1.g2((new Long(1, 0)).d2(index)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_0 = index + this.h1x_1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator = accumulator.q1x(element_0);
              }
            }
             while (inductionVariable_0 < 64);
        }
        if (!this.f1x_1.equals(new Long(0, 0))) {
          var inductionVariable_1 = 0;
          if (inductionVariable_1 < 64)
            do {
              var index_0 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              if (!this.f1x_1.g2((new Long(1, 0)).d2(index_0)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_1 = (index_0 + 64 | 0) + this.h1x_1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator = accumulator.q1x(element_1);
              }
            }
             while (inductionVariable_1 < 64);
        }
        tmp_0 = accumulator;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
        var accumulator_0 = this;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
        var belowBound_0 = bits.i1x_1;
        if (!(belowBound_0 == null)) {
          var inductionVariable_2 = 0;
          var last_0 = belowBound_0.length;
          while (inductionVariable_2 < last_0) {
            var element_2 = belowBound_0[inductionVariable_2];
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
            accumulator_0 = accumulator_0.q1x(element_2);
          }
        }
        if (!bits.g1x_1.equals(new Long(0, 0))) {
          var inductionVariable_3 = 0;
          if (inductionVariable_3 < 64)
            do {
              var index_1 = inductionVariable_3;
              inductionVariable_3 = inductionVariable_3 + 1 | 0;
              if (!bits.g1x_1.g2((new Long(1, 0)).d2(index_1)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_3 = index_1 + bits.h1x_1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator_0 = accumulator_0.q1x(element_3);
              }
            }
             while (inductionVariable_3 < 64);
        }
        if (!bits.f1x_1.equals(new Long(0, 0))) {
          var inductionVariable_4 = 0;
          if (inductionVariable_4 < 64)
            do {
              var index_2 = inductionVariable_4;
              inductionVariable_4 = inductionVariable_4 + 1 | 0;
              if (!bits.f1x_1.g2((new Long(1, 0)).d2(index_2)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_4 = (index_2 + 64 | 0) + bits.h1x_1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator_0 = accumulator_0.q1x(element_4);
              }
            }
             while (inductionVariable_4 < 64);
        }
        tmp_0 = accumulator_0;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).f = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).f();
  };
  protoOf(SnapshotIdSet).q1y = function (default_0) {
    var belowBound = this.i1x_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.g1x_1.equals(new Long(0, 0)))
      return this.h1x_1 + countTrailingZeroBits(this.g1x_1) | 0;
    if (!this.f1x_1.equals(new Long(0, 0)))
      return (this.h1x_1 + 64 | 0) + countTrailingZeroBits(this.f1x_1) | 0;
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var tmp0_iterator = this.f();
    while (tmp0_iterator.g()) {
      var item = tmp0_iterator.h();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      var tmp$ret$0 = item.toString();
      destination.d(tmp$ret$0);
    }
    return tmp + ' [' + fastJoinToString(destination) + ']';
  };
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  var sync;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (!properties_initialized_SnapshotStateMap_kt_9i73ip) {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync = new Object();
    }
  }
  function find_1($this, value, hash) {
    var low = 0;
    var high = $this.n1z_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midHash = $this.o1z_1[mid];
      if (midHash < hash)
        low = mid + 1 | 0;
      else if (midHash > hash)
        high = mid - 1 | 0;
      else {
        var tmp0_safe_receiver = $this.p1z_1[mid];
        var midVal = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.xi();
        if (value === midVal)
          return mid;
        return findExactIndex($this, mid, value, hash);
      }
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!($this.o1z_1[i] === valueHash)) {
          break $l$loop;
        }
        var tmp1_safe_receiver = $this.p1z_1[i];
        var v = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.xi();
        if (v === value) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.n1z_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!($this.o1z_1[i_0] === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
        var tmp3_safe_receiver = $this.p1z_1[i_0];
        var v_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.xi();
        if (v_0 === value) {
          return i_0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.n1z_1 + 1 | 0) | 0;
  }
  function SnapshotWeakSet() {
    this.n1z_1 = 0;
    this.o1z_1 = new Int32Array(16);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.p1z_1 = fillArrayVal(Array(16), null);
  }
  protoOf(SnapshotWeakSet).r1z = function (value) {
    var index;
    var size = this.n1z_1;
    var hash = identityHashCode(value);
    if (size > 0) {
      index = find_1(this, value, hash);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var capacity = this.p1z_1.length;
    if (size === capacity) {
      var newCapacity = imul(capacity, 2);
      // Inline function 'kotlin.arrayOfNulls' call
      var newValues = fillArrayVal(Array(newCapacity), null);
      var newHashes = new Int32Array(newCapacity);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.p1z_1;
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(this_0, newValues, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.p1z_1;
      arrayCopy(this_1, newValues, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      var this_2 = this.o1z_1;
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_2;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newHashes, destinationOffset_0, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this.o1z_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newHashes, 0, 0, insertIndex);
      this.p1z_1 = newValues;
      this.o1z_1 = newHashes;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var this_3 = this.p1z_1;
      var destination = this.p1z_1;
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(this_3, destination, destinationOffset_1, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_4 = this.o1z_1;
      var destination_0 = this.o1z_1;
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = this_4;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, destination_0, destinationOffset_2, insertIndex, size);
    }
    this.p1z_1[insertIndex] = new WeakReference(value);
    this.o1z_1[insertIndex] = hash;
    this.n1z_1 = this.n1z_1 + 1 | 0;
    return true;
  };
  function StateObjectImpl() {
    this.y1d_1 = new AtomicInt(0);
  }
  protoOf(StateObjectImpl).z1d = function (reader) {
    do {
      var old = _ReaderKind___init__impl__jqeebu(this.y1d_1.xi());
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
      var this_0 = old;
      if (!((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0))
        return Unit_instance;
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.withReadIn' call
      var this_1 = old;
      var new_0 = _ReaderKind___init__impl__jqeebu(_ReaderKind___get_mask__impl__gmhzqb(this_1) | _ReaderKind___get_mask__impl__gmhzqb(reader));
    }
     while (!this.y1d_1.l20(_ReaderKind___get_mask__impl__gmhzqb(old), _ReaderKind___get_mask__impl__gmhzqb(new_0)));
  };
  protoOf(StateObjectImpl).b1h = function (reader) {
    // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
    var this_0 = _ReaderKind___init__impl__jqeebu(this.y1d_1.xi());
    return !((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0);
  };
  function _ReaderKind___init__impl__jqeebu(mask) {
    mask = mask === VOID ? 0 : mask;
    return mask;
  }
  function _ReaderKind___get_mask__impl__gmhzqb($this) {
    return $this;
  }
  function Companion_13() {
  }
  var Companion_instance_14;
  function Companion_getInstance_13() {
    return Companion_instance_14;
  }
  function get_LocalInspectionTables() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function _init_properties_InspectionTables_kt__ovfk2v() {
    if (!properties_initialized_InspectionTables_kt_tgdbmt) {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function AtomicReference(value) {
    this.l1c_1 = value;
  }
  protoOf(AtomicReference).xi = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.l1c_1;
  };
  protoOf(AtomicReference).m1e = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.runtime.AtomicReference.set.<set-delegate>' call
    this.l1c_1 = value;
  };
  protoOf(AtomicReference).m1c = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_getAndSet' call
    var oldValue = this.l1c_1;
    // Inline function 'androidx.compose.runtime.AtomicReference.getAndSet.<set-delegate>' call
    this.l1c_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).t1d = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.l1c_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicReference.compareAndSet.<set-delegate>' call
        this.l1c_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function AtomicInt(value) {
    this.rw_1 = value;
  }
  protoOf(AtomicInt).xi = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.rw_1;
  };
  protoOf(AtomicInt).sw = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.runtime.AtomicInt.set.<set-delegate>' call
    this.rw_1 = value;
  };
  protoOf(AtomicInt).kq = function (amount) {
    // Inline function 'kotlinx.atomicfu.atomicfu_addAndGet' call
    // Inline function 'androidx.compose.runtime.AtomicInt.add.<set-delegate>' call
    this.rw_1 = this.rw_1 + amount | 0;
    return this.rw_1;
  };
  protoOf(AtomicInt).l20 = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.rw_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicInt.compareAndSet.<set-delegate>' call
        this.rw_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function trackWrite($this) {
    if ($this.c1w_1) {
      var scope = $this.e1w_1;
      if (!(scope == null)) {
        scope.o1e();
        $this.e1w_1 = null;
      }
      var scopes = $this.f1w_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.i();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.o(index);
            item.o1e();
          }
           while (inductionVariable < last);
        scopes.b1();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.c1w_1) {
      var scope = composer.i1a();
      if (!(scope == null)) {
        composer.l1a(scope);
        var lastScope = $this.e1w_1;
        if (replacableWith(lastScope, scope)) {
          $this.e1w_1 = scope;
        } else {
          var lastScopes = $this.f1w_1;
          if (lastScopes == null) {
            // Inline function 'kotlin.collections.mutableListOf' call
            var newScopes = ArrayList_init_$Create$();
            $this.f1w_1 = newScopes;
            newScopes.d(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.i();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.o(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.c1(index, scope);
                  return Unit_instance;
                }
              }
               while (inductionVariable < last);
            lastScopes.d(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.c18(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.m20($p1, nc, updateChangedFlags($changed) | 1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl(key, tracked, block) {
    this.b1w_1 = key;
    this.c1w_1 = tracked;
    this.d1w_1 = block;
    this.e1w_1 = null;
    this.f1w_1 = null;
  }
  protoOf(ComposableLambdaImpl).g1w = function (block) {
    if (!equals(this.d1w_1, block)) {
      var oldBlockNull = this.d1w_1 == null;
      this.d1w_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).c18 = function (c, changed) {
    var c_0 = c.r19(this.b1w_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.vz(this) ? differentBits(0) : sameBits(0));
    var tmp = this.d1w_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.s19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w1f(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).m20 = function (p1, c, changed) {
    var c_0 = c.r19(this.b1w_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.vz(this) ? differentBits(1) : sameBits(1));
    var tmp = this.d1w_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.s19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w1f(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  function set_nextHash(_set____db54di) {
    _init_properties_ActualJs_js_kt__rh77u6();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return nextHash;
  }
  var nextHash;
  function get_DefaultMonotonicFrameClock() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return DefaultMonotonicFrameClock;
  }
  var DefaultMonotonicFrameClock;
  function logError(message, e) {
    _init_properties_ActualJs_js_kt__rh77u6();
    println(message);
    printStackTrace(e);
  }
  function currentThreadId() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new Long(0, 0);
  }
  function identityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    if (instance == null) {
      return 0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var hashCode = instance['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp;
    switch (typeof instance) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $continuation) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      this_0.c8(tmp$ret$0);
      return Unit_instance;
    };
  }
  function $withFrameNanosCOROUTINE$4(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v20_1 = _this__u8e3s4;
    this.w20_1 = onFrame;
  }
  protoOf($withFrameNanosCOROUTINE$4).z7 = function () {
    var suspendResult = this.t7_1;
    $sm: do
      try {
        var tmp = this.r7_1;
        switch (tmp) {
          case 0:
            this.s7_1 = 2;
            this.r7_1 = 1;
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = window;
            tmp_0.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.w20_1, safe));
            suspendResult = returnIfSuspended(safe.j8(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.u7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s7_1 === 2) {
          throw e;
        } else {
          this.r7_1 = this.s7_1;
          this.u7_1 = e;
        }
      }
     while (true);
  };
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).vw = function (onFrame, $completion) {
    var tmp = new $withFrameNanosCOROUTINE$4(this, onFrame, $completion);
    tmp.t7_1 = Unit_instance;
    tmp.u7_1 = null;
    return tmp.z7();
  };
  function memoizeIdentityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function _init_properties_ActualJs_js_kt__rh77u6() {
    if (!properties_initialized_ActualJs_js_kt_azbr3k) {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
  }
  protoOf(Trace).o16 = function (name) {
    return null;
  };
  protoOf(Trace).b17 = function (token) {
  };
  var Trace_instance;
  function Trace_getInstance() {
    return Trace_instance;
  }
  function invokeComposable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    composable(composer, 1);
  }
  function createSnapshotMutableState(value, policy) {
    return new SnapshotMutableStateImpl(value, policy);
  }
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  function IntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 10 : initialCapacity;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.r12_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(IntMap).o = function (key) {
    return this.r12_1.l1(key);
  };
  protoOf(IntMap).s12 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.r12_1.t3(key, value);
  };
  function WeakReference(reference) {
    this.q1z_1 = reference;
  }
  protoOf(WeakReference).xi = function () {
    return this.q1z_1;
  };
  //region block: post-declaration
  protoOf(OffsetApplier).sv = onBeginChanges;
  protoOf(OffsetApplier).tv = onEndChanges;
  protoOf(AbstractApplier).sv = onBeginChanges;
  protoOf(AbstractApplier).tv = onEndChanges;
  protoOf(BroadcastFrameClock).h1 = get_key;
  protoOf(BroadcastFrameClock).e8 = get;
  protoOf(BroadcastFrameClock).zb = fold;
  protoOf(BroadcastFrameClock).yb = minusKey;
  protoOf(BroadcastFrameClock).ac = plus;
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.l8();
  });
  protoOf(StructuralEqualityPolicy).d1n = merge;
  protoOf(StateObjectImpl).s1n = mergeRecords;
  protoOf(MonotonicClockImpl).h1 = get_key;
  protoOf(MonotonicClockImpl).e8 = get;
  protoOf(MonotonicClockImpl).zb = fold;
  protoOf(MonotonicClockImpl).yb = minusKey;
  protoOf(MonotonicClockImpl).ac = plus;
  //endregion
  //region block: init
  ScopeInvalidated_instance = new ScopeInvalidated();
  Key_instance_0 = new Key();
  Companion_instance_2 = new Companion_1();
  Companion_instance_4 = new Companion_3();
  StructuralEqualityPolicy_instance = new StructuralEqualityPolicy();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  EndOfChain_instance = new EndOfChain();
  Companion_instance_11 = new Companion_10();
  Companion_instance_14 = new Companion_13();
  Trace_instance = new Trace();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = composableLambdaInstance;
  _.$_$.b = composableLambda;
  _.$_$.c = rememberComposableLambda;
  _.$_$.d = AbstractApplier;
  _.$_$.e = CompositionScopedCoroutineScopeCanceller;
  _.$_$.f = ControlledComposition;
  _.$_$.g = get_DefaultMonotonicFrameClock;
  _.$_$.h = DisposableEffect;
  _.$_$.i = LaunchedEffect;
  _.$_$.j = Recomposer;
  _.$_$.k = createCompositionCoroutineScope;
  _.$_$.l = invalidApplier;
  _.$_$.m = isTraceInProgress;
  _.$_$.n = mutableStateOf;
  _.$_$.o = sourceInformationMarkerEnd;
  _.$_$.p = sourceInformationMarkerStart;
  _.$_$.q = traceEventEnd;
  _.$_$.r = traceEventStart;
  _.$_$.s = updateChangedFlags;
  _.$_$.t = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.u = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.v = _Updater___init__impl__rbfxm8;
  _.$_$.w = Updater__set_impl_v7kwss;
  _.$_$.x = Companion_instance_11;
  _.$_$.y = Companion_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-runtime-runtime.js.map
