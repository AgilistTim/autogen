"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7711],{4403:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(5893),o=t(1151);const i={},a="Enhanced Inference",r={id:"Use-Cases/enhanced_inference",title:"Enhanced Inference",description:"autogen.OpenAIWrapper provides enhanced LLM inference for openai>=1.",source:"@site/docs/Use-Cases/enhanced_inference.md",sourceDirName:"Use-Cases",slug:"/Use-Cases/enhanced_inference",permalink:"/autogen/docs/Use-Cases/enhanced_inference",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/Use-Cases/enhanced_inference.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Multi-agent Conversation Framework",permalink:"/autogen/docs/Use-Cases/agent_chat"},next:{title:"Contributing",permalink:"/autogen/docs/Contribute"}},c={},l=[{value:"Tune Inference Parameters (for openai&lt;1)",id:"tune-inference-parameters-for-openai1",level:2},{value:"Choices to optimize",id:"choices-to-optimize",level:3},{value:"Validation data",id:"validation-data",level:3},{value:"Evaluation function",id:"evaluation-function",level:3},{value:"Metric to optimize",id:"metric-to-optimize",level:3},{value:"Search space",id:"search-space",level:3},{value:"Budgets",id:"budgets",level:3},{value:"Perform tuning",id:"perform-tuning",level:3},{value:"API unification",id:"api-unification",level:2},{value:"Usage Summary",id:"usage-summary",level:2},{value:"Caching",id:"caching",level:2},{value:"Turnning off cache",id:"turnning-off-cache",level:3},{value:"Difference between <code>cache_seed</code> and openai&#39;s <code>seed</code> parameter",id:"difference-between-cache_seed-and-openais-seed-parameter",level:3},{value:"Error handling",id:"error-handling",level:2},{value:"Runtime error",id:"runtime-error",level:3},{value:"Logic error",id:"logic-error",level:3},{value:"Templating",id:"templating",level:2},{value:"Logging (for openai&lt;1)",id:"logging-for-openai1",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"enhanced-inference",children:"Enhanced Inference"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"autogen.OpenAIWrapper"})," provides enhanced LLM inference for ",(0,s.jsx)(n.code,{children:"openai>=1"}),".\n",(0,s.jsx)(n.code,{children:"autogen.Completion"})," is a drop-in replacement of ",(0,s.jsx)(n.code,{children:"openai.Completion"})," and ",(0,s.jsx)(n.code,{children:"openai.ChatCompletion"})," for enhanced LLM inference using ",(0,s.jsx)(n.code,{children:"openai<1"}),".\nThere are a number of benefits of using ",(0,s.jsx)(n.code,{children:"autogen"})," to perform inference: performance tuning, API unification, caching, error handling, multi-config inference, result filtering, templating and so on."]}),"\n",(0,s.jsx)(n.h2,{id:"tune-inference-parameters-for-openai1",children:"Tune Inference Parameters (for openai<1)"}),"\n",(0,s.jsxs)(n.p,{children:["Find a list of examples in this page: ",(0,s.jsx)(n.a,{href:"/autogen/docs/Examples#inference-hyperparameters-tuning",children:"Tune Inference Parameters Examples"})]}),"\n",(0,s.jsx)(n.h3,{id:"choices-to-optimize",children:"Choices to optimize"}),"\n",(0,s.jsx)(n.p,{children:"The cost of using foundation models for text generation is typically measured in terms of the number of tokens in the input and output combined. From the perspective of an application builder using foundation models, the use case is to maximize the utility of the generated text under an inference budget constraint (e.g., measured by the average dollar cost needed to solve a coding problem). This can be achieved by optimizing the hyperparameters of the inference,\nwhich can significantly affect both the utility and the cost of the generated text."}),"\n",(0,s.jsx)(n.p,{children:"The tunable hyperparameters include:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"model - this is a required input, specifying the model ID to use."}),"\n",(0,s.jsx)(n.li,{children:"prompt/messages - the input prompt/messages to the model, which provides the context for the text generation task."}),"\n",(0,s.jsx)(n.li,{children:"max_tokens - the maximum number of tokens (words or word pieces) to generate in the output."}),"\n",(0,s.jsx)(n.li,{children:"temperature - a value between 0 and 1 that controls the randomness of the generated text. A higher temperature will result in more random and diverse text, while a lower temperature will result in more predictable text."}),"\n",(0,s.jsx)(n.li,{children:"top_p - a value between 0 and 1 that controls the sampling probability mass for each token generation. A lower top_p value will make it more likely to generate text based on the most likely tokens, while a higher value will allow the model to explore a wider range of possible tokens."}),"\n",(0,s.jsx)(n.li,{children:"n - the number of responses to generate for a given prompt. Generating multiple responses can provide more diverse and potentially more useful output, but it also increases the cost of the request."}),"\n",(0,s.jsx)(n.li,{children:"stop - a list of strings that, when encountered in the generated text, will cause the generation to stop. This can be used to control the length or the validity of the output."}),"\n",(0,s.jsx)(n.li,{children:"presence_penalty, frequency_penalty - values that control the relative importance of the presence and frequency of certain words or phrases in the generated text."}),"\n",(0,s.jsx)(n.li,{children:'best_of - the number of responses to generate server-side when selecting the "best" (the one with the highest log probability per token) response for a given prompt.'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The cost and utility of text generation are intertwined with the joint effect of these hyperparameters.\nThere are also complex interactions among subsets of the hyperparameters. For example,\nthe temperature and top_p are not recommended to be altered from their default values together because they both control the randomness of the generated text, and changing both at the same time can result in conflicting effects; n and best_of are rarely tuned together because if the application can process multiple outputs, filtering on the server side causes unnecessary information loss; both n and max_tokens will affect the total number of tokens generated, which in turn will affect the cost of the request.\nThese interactions and trade-offs make it difficult to manually determine the optimal hyperparameter settings for a given text generation task."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Do the choices matter? Check this ",(0,s.jsx)(n.a,{href:"/blog/2023/04/21/LLM-tuning-math",children:"blogpost"})," to find example tuning results about gpt-3.5-turbo and gpt-4."]})}),"\n",(0,s.jsx)(n.p,{children:"With AutoGen, the tuning can be performed with the following information:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Validation data."}),"\n",(0,s.jsx)(n.li,{children:"Evaluation function."}),"\n",(0,s.jsx)(n.li,{children:"Metric to optimize."}),"\n",(0,s.jsx)(n.li,{children:"Search space."}),"\n",(0,s.jsx)(n.li,{children:"Budgets: inference and optimization respectively."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"validation-data",children:"Validation data"}),"\n",(0,s.jsx)(n.p,{children:'Collect a diverse set of instances. They can be stored in an iterable of dicts. For example, each instance dict can contain "problem" as a key and the description str of a math problem as the value; and "solution" as a key and the solution str as the value.'}),"\n",(0,s.jsx)(n.h3,{id:"evaluation-function",children:"Evaluation function"}),"\n",(0,s.jsx)(n.p,{children:"The evaluation function should take a list of responses, and other keyword arguments corresponding to the keys in each validation data instance as input, and output a dict of metrics. For example,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def eval_math_responses(responses: List[str], solution: str, **args) -> Dict:\n    # select a response from the list of responses\n    answer = voted_answer(responses)\n    # check whether the answer is correct\n    return {"success": is_equivalent(answer, solution)}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"autogen.code_utils"})," and ",(0,s.jsx)(n.code,{children:"autogen.math_utils"})," offer some example evaluation functions for code generation and math problem solving."]}),"\n",(0,s.jsx)(n.h3,{id:"metric-to-optimize",children:"Metric to optimize"}),"\n",(0,s.jsx)(n.p,{children:'The metric to optimize is usually an aggregated metric over all the tuning data instances. For example, users can specify "success" as the metric and "max" as the optimization mode. By default, the aggregation function is taking the average. Users can provide a customized aggregation function if needed.'}),"\n",(0,s.jsx)(n.h3,{id:"search-space",children:"Search space"}),"\n",(0,s.jsx)(n.p,{children:"Users can specify the (optional) search range for each hyperparameter."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["model. Either a constant str, or multiple choices specified by ",(0,s.jsx)(n.code,{children:"flaml.tune.choice"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:['prompt/messages. Prompt is either a str or a list of strs, of the prompt templates. messages is a list of dicts or a list of lists, of the message templates.\nEach prompt/message template will be formatted with each data instance. For example, the prompt template can be:\n"{problem} Solve the problem carefully. Simplify your answer as much as possible. Put the final answer in \\boxed{{}}."\nAnd ',(0,s.jsx)(n.code,{children:"{problem}"}),' will be replaced by the "problem" field of each data instance.']}),"\n",(0,s.jsxs)(n.li,{children:["max_tokens, n, best_of. They can be constants, or specified by ",(0,s.jsx)(n.code,{children:"flaml.tune.randint"}),", ",(0,s.jsx)(n.code,{children:"flaml.tune.qrandint"}),", ",(0,s.jsx)(n.code,{children:"flaml.tune.lograndint"})," or ",(0,s.jsx)(n.code,{children:"flaml.qlograndint"}),". By default, max_tokens is searched in [50, 1000); n is searched in [1, 100); and best_of is fixed to 1."]}),"\n",(0,s.jsx)(n.li,{children:"stop. It can be a str or a list of strs, or a list of lists of strs or None. Default is None."}),"\n",(0,s.jsxs)(n.li,{children:["temperature or top_p. One of them can be specified as a constant or by ",(0,s.jsx)(n.code,{children:"flaml.tune.uniform"})," or ",(0,s.jsx)(n.code,{children:"flaml.tune.loguniform"})," etc.\nPlease don't provide both. By default, each configuration will choose either a temperature or a top_p in [0, 1] uniformly."]}),"\n",(0,s.jsxs)(n.li,{children:["presence_penalty, frequency_penalty. They can be constants or specified by ",(0,s.jsx)(n.code,{children:"flaml.tune.uniform"})," etc. Not tuned by default."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"budgets",children:"Budgets"}),"\n",(0,s.jsx)(n.p,{children:"One can specify an inference budget and an optimization budget.\nThe inference budget refers to the average inference cost per data instance.\nThe optimization budget refers to the total budget allowed in the tuning process. Both are measured by dollars and follow the price per 1000 tokens."}),"\n",(0,s.jsx)(n.h3,{id:"perform-tuning",children:"Perform tuning"}),"\n",(0,s.jsxs)(n.p,{children:["Now, you can use ",(0,s.jsx)(n.code,{children:"autogen.Completion.tune"})," for tuning. For example,"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import autogen\n\nconfig, analysis = autogen.Completion.tune(\n    data=tune_data,\n    metric="success",\n    mode="max",\n    eval_func=eval_func,\n    inference_budget=0.05,\n    optimization_budget=3,\n    num_samples=-1,\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"num_samples"})," is the number of configurations to sample. -1 means unlimited (until optimization budget is exhausted).\nThe returned ",(0,s.jsx)(n.code,{children:"config"})," contains the optimized configuration and ",(0,s.jsx)(n.code,{children:"analysis"})," contains an ExperimentAnalysis object for all the tried configurations and results."]}),"\n",(0,s.jsx)(n.p,{children:"The tuned config can be used to perform inference."}),"\n",(0,s.jsx)(n.h2,{id:"api-unification",children:"API unification"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"autogen.OpenAIWrapper.create()"})," can be used to create completions for both chat and non-chat models, and both OpenAI API and Azure OpenAI API."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from autogen import OpenAIWrapper\n# OpenAI endpoint\nclient = OpenAIWrapper()\n# ChatCompletion\nresponse = client.create(messages=[{"role": "user", "content": "2+2="}], model="gpt-3.5-turbo")\n# extract the response text\nprint(client.extract_text_or_completion_object(response))\n# get cost of this completion\nprint(response.cost)\n# Azure OpenAI endpoint\nclient = OpenAIWrapper(api_key=..., base_url=..., api_version=..., api_type="azure")\n# Completion\nresponse = client.create(prompt="2+2=", model="gpt-3.5-turbo-instruct")\n# extract the response text\nprint(client.extract_text_or_completion_object(response))\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For local LLMs, one can spin up an endpoint using a package like ",(0,s.jsx)(n.a,{href:"https://github.com/lm-sys/FastChat",children:"FastChat"}),", and then use the same API to send a request. See ",(0,s.jsx)(n.a,{href:"/blog/2023/07/14/Local-LLMs",children:"here"})," for examples on how to make inference with local LLMs."]}),"\n",(0,s.jsxs)(n.p,{children:["For custom model clients, one can register the client with ",(0,s.jsx)(n.code,{children:"autogen.OpenAIWrapper.register_model_client"})," and then use the same API to send a request. See ",(0,s.jsx)(n.a,{href:"/blog/2024/01/26/Custom-Models",children:"here"})," for examples on how to make inference with custom model clients."]}),"\n",(0,s.jsx)(n.h2,{id:"usage-summary",children:"Usage Summary"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"OpenAIWrapper"})," from ",(0,s.jsx)(n.code,{children:"autogen"})," tracks token counts and costs of your API calls. Use the ",(0,s.jsx)(n.code,{children:"create()"})," method to initiate requests and ",(0,s.jsx)(n.code,{children:"print_usage_summary()"})," to retrieve a detailed usage report, including total cost and token usage for both cached and actual requests."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'mode=["actual", "total"]'})," (default): print usage summary for all completions and non-caching completions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mode='actual'"}),": only print non-cached usage."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mode='total'"}),": only print all usage (including cache)."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Reset your session's usage data with ",(0,s.jsx)(n.code,{children:"clear_usage_summary()"})," when needed. ",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/oai_client_cost.ipynb",children:"View Notebook"})]}),"\n",(0,s.jsx)(n.p,{children:"Example usage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from autogen import OpenAIWrapper\n\nclient = OpenAIWrapper()\nclient.create(messages=[{"role": "user", "content": "Python learning tips."}], model="gpt-3.5-turbo")\nclient.print_usage_summary()  # Display usage\nclient.clear_usage_summary()  # Reset usage data\n'})}),"\n",(0,s.jsx)(n.p,{children:"Sample output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Usage summary excluding cached usage:\nTotal cost: 0.00015\n* Model 'gpt-3.5-turbo': cost: 0.00015, prompt_tokens: 25, completion_tokens: 58, total_tokens: 83\n\nUsage summary including cached usage:\nTotal cost: 0.00027\n* Model 'gpt-3.5-turbo': cost: 0.00027, prompt_tokens: 50, completion_tokens: 100, total_tokens: 150\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note: if using a custom model client (see ",(0,s.jsx)(n.a,{href:"/blog/2024/01/26/Custom-Models",children:"here"})," for details) and if usage summary is not implemented, then the usage summary will not be available."]}),"\n",(0,s.jsx)(n.h2,{id:"caching",children:"Caching"}),"\n",(0,s.jsx)(n.p,{children:"API call results are cached locally and reused when the same request is issued.\nThis is useful when repeating or continuing experiments for reproducibility and cost saving."}),"\n",(0,s.jsxs)(n.p,{children:["Starting version 0.2.8, a configurable context manager allows you to easily configure\nthe cache, using either DiskCache or Redis.\nAll ",(0,s.jsx)(n.code,{children:"OpenAIWrapper"})," created inside the context manager can use the same cache\nthrough the constructor."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from autogen import Cache\n\nwith Cache.redis(redis_url="redis://localhost:6379/0") as cache:\n    client = OpenAIWrapper(..., cache=cache)\n    client.create(...)\n\nwith Cache.disk() as cache:\n    client = OpenAIWrapper(..., cache=cache)\n    client.create(...)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can also set a cache directly in the ",(0,s.jsx)(n.code,{children:"create()"})," method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"client = OpenAIWrapper(...)\nwith Cache.disk() as cache:\n    client.create(..., cache=cache)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can vary the ",(0,s.jsx)(n.code,{children:"cache_seed"})," parameter to get different LLM output while\nstill using cache."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Setting the cache_seed to 1 will use a different cache from the default one\n# and you will see different output.\nwith Cache.disk(cache_seed=1) as cache:\n    client.create(..., cache=cache)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default DiskCache uses ",(0,s.jsx)(n.code,{children:".cache"})," for storage. To change the cache directory,\nset ",(0,s.jsx)(n.code,{children:"cache_path_root"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'with Cache.disk(cache_path_root="/tmp/autogen_cache") as cache:\n    client.create(..., cache=cache)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"turnning-off-cache",children:"Turnning off cache"}),"\n",(0,s.jsxs)(n.p,{children:["For backward compatibility, DiskCache is always enabled by default\nwith ",(0,s.jsx)(n.code,{children:"cache_seed"})," set to 41. To fully disable it, set ",(0,s.jsx)(n.code,{children:"cache_seed"})," to None."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Turn off cache in constructor,\nclient = OpenAIWrapper(..., cache_seed=None)\n# or directly in create().\nclient.create(..., cache_seed=None)\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"difference-between-cache_seed-and-openais-seed-parameter",children:["Difference between ",(0,s.jsx)(n.code,{children:"cache_seed"})," and openai's ",(0,s.jsx)(n.code,{children:"seed"})," parameter"]}),"\n",(0,s.jsxs)(n.p,{children:["openai v1.1 introduces a new param ",(0,s.jsx)(n.code,{children:"seed"}),".\nThe differences between autogen's ",(0,s.jsx)(n.code,{children:"cache_seed"})," and openai's ",(0,s.jsx)(n.code,{children:"seed"}),":\n- autogen uses local disk cache to guarantee the exactly same output is produced\nfor the same input and when cache is hit, no openai api call will be made.\n- openai's ",(0,s.jsx)(n.code,{children:"seed"})," is a best-effort deterministic sampling with no guarantee\nof determinism. When using openai's ",(0,s.jsx)(n.code,{children:"seed"})," with ",(0,s.jsx)(n.code,{children:"cache_seed"})," set to None,\neven for the same input, an openai api call will be made and there is\nno guarantee for getting exactly the same output."]}),"\n",(0,s.jsx)(n.h2,{id:"error-handling",children:"Error handling"}),"\n",(0,s.jsx)(n.h3,{id:"runtime-error",children:"Runtime error"}),"\n",(0,s.jsx)(n.p,{children:"One can pass a list of configurations of different models/endpoints to mitigate the rate limits and other runtime error. For example,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'client = OpenAIWrapper(\n    config_list=[\n        {\n            "model": "gpt-4",\n            "api_key": os.environ.get("AZURE_OPENAI_API_KEY"),\n            "api_type": "azure",\n            "base_url": os.environ.get("AZURE_OPENAI_API_BASE"),\n            "api_version": "2023-08-01-preview",\n        },\n        {\n            "model": "gpt-3.5-turbo",\n            "api_key": os.environ.get("OPENAI_API_KEY"),\n            "base_url": "https://api.openai.com/v1",\n        },\n        {\n            "model": "llama2-chat-7B",\n            "base_url": "http://127.0.0.1:8080",\n        },\n        {\n            "model": "microsoft/phi-2",\n            "model_client_cls": "CustomModelClient"\n        }\n    ],\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"client.create()"})," will try querying Azure OpenAI gpt-4, OpenAI gpt-3.5-turbo, a locally hosted llama2-chat-7B, and phi-2 using a custom model client class named ",(0,s.jsx)(n.code,{children:"CustomModelClient"}),", one by one,\nuntil a valid result is returned. This can speed up the development process where the rate limit is a bottleneck. An error will be raised if the last choice fails. So make sure the last choice in the list has the best availability."]}),"\n",(0,s.jsx)(n.p,{children:"For convenience, we provide a number of utility functions to load config lists."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"get_config_list"}),": Generates configurations for API calls, primarily from provided API keys."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"config_list_openai_aoai"}),": Constructs a list of configurations using both Azure OpenAI and OpenAI endpoints, sourcing API keys from environment variables or local files."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"config_list_from_json"}),": Loads configurations from a JSON structure, either from an environment variable or a local JSON file, with the flexibility of filtering configurations based on given criteria."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"config_list_from_models"}),": Creates configurations based on a provided list of models, useful when targeting specific models without manually specifying each configuration."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"config_list_from_dotenv"}),": Constructs a configuration list from a ",(0,s.jsx)(n.code,{children:".env"})," file, offering a consolidated way to manage multiple API configurations and keys from a single file."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["We suggest that you take a look at this ",(0,s.jsx)(n.a,{href:"/docs/llm_endpoint_configuration",children:"notebook"})," for full code examples of the different methods to configure your model endpoints."]}),"\n",(0,s.jsx)(n.h3,{id:"logic-error",children:"Logic error"}),"\n",(0,s.jsx)(n.p,{children:"Another type of error is that the returned response does not satisfy a requirement. For example, if the response is required to be a valid json string, one would like to filter the responses that are not. This can be achieved by providing a list of configurations and a filter function. For example,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def valid_json_filter(response, **_):\n    for text in OpenAIWrapper.extract_text_or_completion_object(response):\n        try:\n            json.loads(text)\n            return True\n        except ValueError:\n            pass\n    return False\n\nclient = OpenAIWrapper(\n    config_list=[{"model": "text-ada-001"}, {"model": "gpt-3.5-turbo-instruct"}, {"model": "text-davinci-003"}],\n)\nresponse = client.create(\n    prompt="How to construct a json request to Bing API to search for \'latest AI news\'? Return the JSON request.",\n    filter_func=valid_json_filter,\n)\n'})}),"\n",(0,s.jsx)(n.p,{children:"The example above will try to use text-ada-001, gpt-3.5-turbo-instruct, and text-davinci-003 iteratively, until a valid json string is returned or the last config is used. One can also repeat the same model in the list for multiple times (with different seeds) to try one model multiple times for increasing the robustness of the final response."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Advanced use case: Check this ",(0,s.jsx)(n.a,{href:"/blog/2023/05/18/GPT-adaptive-humaneval",children:"blogpost"})," to find how to improve GPT-4's coding performance from 68% to 90% while reducing the inference cost."]})}),"\n",(0,s.jsx)(n.h2,{id:"templating",children:"Templating"}),"\n",(0,s.jsx)(n.p,{children:"If the provided prompt or message is a template, it will be automatically materialized with a given context. For example,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'response = client.create(\n    context={"problem": "How many positive integers, not exceeding 100, are multiples of 2 or 3 but not 4?"},\n    prompt="{problem} Solve the problem carefully.",\n    allow_format_str_template=True,\n    **config\n)\n'})}),"\n",(0,s.jsx)(n.p,{children:"A template is either a format str, like the example above, or a function which produces a str from several input fields, like the example below."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def content(turn, context):\n    return "\\n".join(\n        [\n            context[f"user_message_{turn}"],\n            context[f"external_info_{turn}"]\n        ]\n    )\n\nmessages = [\n    {\n        "role": "system",\n        "content": "You are a teaching assistant of math.",\n    },\n    {\n        "role": "user",\n        "content": partial(content, turn=0),\n    },\n]\ncontext = {\n    "user_message_0": "Could you explain the solution to Problem 1?",\n    "external_info_0": "Problem 1: ...",\n}\n\nresponse = client.create(context=context, messages=messages, **config)\nmessages.append(\n    {\n        "role": "assistant",\n        "content": client.extract_text(response)[0]\n    }\n)\nmessages.append(\n    {\n        "role": "user",\n        "content": partial(content, turn=1),\n    },\n)\ncontext.append(\n    {\n        "user_message_1": "Why can\'t we apply Theorem 1 to Equation (2)?",\n        "external_info_1": "Theorem 1: ...",\n    }\n)\nresponse = client.create(context=context, messages=messages, **config)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"logging-for-openai1",children:"Logging (for openai<1)"}),"\n",(0,s.jsxs)(n.p,{children:["When debugging or diagnosing an LLM-based system, it is often convenient to log the API calls and analyze them. ",(0,s.jsx)(n.code,{children:"autogen.Completion"})," and ",(0,s.jsx)(n.code,{children:"autogen.ChatCompletion"})," offer an easy way to collect the API call histories. For example, to log the chat histories, simply run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"autogen.ChatCompletion.start_logging()\n"})}),"\n",(0,s.jsx)(n.p,{children:"The API calls made after this will be automatically logged. They can be retrieved at any time by:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"autogen.ChatCompletion.logged_history\n"})}),"\n",(0,s.jsx)(n.p,{children:"There is a function that can be used to print usage summary (total cost, and token count usage from each model):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"autogen.ChatCompletion.print_usage_summary()\n"})}),"\n",(0,s.jsx)(n.p,{children:"To stop logging, use"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"autogen.ChatCompletion.stop_logging()\n"})}),"\n",(0,s.jsx)(n.p,{children:"If one would like to append the history to an existing dict, pass the dict like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"autogen.ChatCompletion.start_logging(history_dict=existing_history_dict)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, the counter of API calls will be reset at ",(0,s.jsx)(n.code,{children:"start_logging()"}),". If no reset is desired, set ",(0,s.jsx)(n.code,{children:"reset_counter=False"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["There are two types of logging formats: compact logging and individual API call logging. The default format is compact.\nSet ",(0,s.jsx)(n.code,{children:"compact=False"})," in ",(0,s.jsx)(n.code,{children:"start_logging()"})," to switch."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Example of a history dict with compact logging."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"{\n    \"\"\"\n    [\n        {\n            'role': 'system',\n            'content': system_message,\n        },\n        {\n            'role': 'user',\n            'content': user_message_1,\n        },\n        {\n            'role': 'assistant',\n            'content': assistant_message_1,\n        },\n        {\n            'role': 'user',\n            'content': user_message_2,\n        },\n        {\n            'role': 'assistant',\n            'content': assistant_message_2,\n        },\n    ]\"\"\": {\n        \"created_at\": [0, 1],\n        \"cost\": [0.1, 0.2],\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Example of a history dict with individual API call logging."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'{\n    0: {\n        "request": {\n            "messages": [\n                {\n                    "role": "system",\n                    "content": system_message,\n                },\n                {\n                    "role": "user",\n                    "content": user_message_1,\n                }\n            ],\n            ... # other parameters in the request\n        },\n        "response": {\n            "choices": [\n                "messages": {\n                    "role": "assistant",\n                    "content": assistant_message_1,\n                },\n            ],\n            ... # other fields in the response\n        }\n    },\n    1: {\n        "request": {\n            "messages": [\n                {\n                    "role": "system",\n                    "content": system_message,\n                },\n                {\n                    "role": "user",\n                    "content": user_message_1,\n                },\n                {\n                    "role": "assistant",\n                    "content": assistant_message_1,\n                },\n                {\n                    "role": "user",\n                    "content": user_message_2,\n                },\n            ],\n            ... # other parameters in the request\n        },\n        "response": {\n            "choices": [\n                "messages": {\n                    "role": "assistant",\n                    "content": assistant_message_2,\n                },\n            ],\n            ... # other fields in the response\n        }\n    },\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Example of printing for usage summary"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Total cost: <cost>\nToken count summary for model <model>: prompt_tokens: <count 1>, completion_tokens: <count 2>, total_tokens: <count 3>\n"})}),"\n",(0,s.jsx)(n.p,{children:"It can be seen that the individual API call history contains redundant information of the conversation. For a long conversation the degree of redundancy is high.\nThe compact history is more efficient and the individual API call history contains more details."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(7294);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);