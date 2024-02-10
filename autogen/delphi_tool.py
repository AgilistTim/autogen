from autogen import AssistantAgent, config_list_from_json
import os

# Load the LLM configuration from an environment variable
config_list = config_list_from_json(env_or_file=os.environ["OAI_CONFIG_LIST"])

# Initialize the question generator agent
question_generator = AssistantAgent("question_generator", llm_config={"config_list": config_list})

# Initialize an example expert agent
expert_persona = AssistantAgent("expert_persona", llm_config={"config_list": config_list})

def simulate_interaction():
    # Example question from the question generator
    # This will be replaced with a dynamic question generation logic in the future
    question = "What are the implications of AI in healthcare?"

    # Here we will later integrate the logic for the expert persona to generate a response
    # For now, this is a placeholder static response
    response = "AI can significantly improve patient outcomes by enabling personalized medicine, but it also raises concerns about data privacy and ethical considerations."

    # Output the question and response
    print(f"Question: {question}")
    print(f"Response: {response}")

if __name__ == "__main__":
    simulate_interaction()
